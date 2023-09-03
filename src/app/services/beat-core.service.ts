import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { BehaviorSubject, Observable } from 'rxjs';
import { beats } from 'src/assets/beats';
import { Beat } from 'src/models';

dayjs.extend(customParseFormat);

@Injectable({
  providedIn: 'root'
})
export class BeatCoreService {

  beatList: Beat[];

  private _selectedBeatSubject$: BehaviorSubject<Beat> = new BehaviorSubject(undefined);
  selectedBeat$: Observable<Beat>;

  private _playingBeatSubject$: BehaviorSubject<Beat> = new BehaviorSubject(undefined);
  playingBeat$: Observable<Beat>;

  private _audio: HTMLAudioElement;
  private _audioIsPlayingSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  audioIsPlaying$: Observable<boolean>;

  // analyzer stuff
  private audioSource = null;
  private analyser: AnalyserNode = null;
  private audioCtx: AudioContext;
  private dataArray: Uint8Array;


  constructor() {
    this._audio = new Audio();
    this.connectAudioAnalyzerToAudio();

    this.beatList = [...beats].sort(this.sortByDate)
    this.audioIsPlaying$ = this._audioIsPlayingSubject$.asObservable();

    this.selectedBeat$ = this._selectedBeatSubject$.asObservable();
    this.playingBeat$ = this._playingBeatSubject$.asObservable();
  }

  private connectAudioAnalyzerToAudio(): void {
    // https://blog.logrocket.com/audio-visualizer-from-scratch-javascript/#web-audio-api-overview

    // remap on every beat selection necessary?
    this.audioCtx = new (window.AudioContext)();
    this.audioSource = this.audioCtx.createMediaElementSource(this._audio);
    this.analyser = this.audioCtx.createAnalyser();
    this.audioSource.connect(this.analyser);
    this.analyser.connect(this.audioCtx.destination);

    // setup options
    // resolution of frequency bands needs to bee higher because analysers bands are probably not set up with logarithmic scale
    this.analyser.fftSize = 2048 * 2 * 2 * 2;
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

  }

  getBassAmp() {
    if (this.analyser) {
      this.analyser.getByteFrequencyData(this.dataArray);
      return this.getCumulativeAmpOfFrequencies(this.dataArray.slice(0, 100));
    } else {
      return 0;
    }
  }

  private getCumulativeAmpOfFrequencies(freqBandsArr: Uint8Array): number {
    // calculate medium loudness of given frequency bands
    const elementsCount = freqBandsArr.length;
    const sumOfElements = freqBandsArr.reduce((a, b) => a + b);
    const loudnessPercent = (sumOfElements / (255 * elementsCount)) * 100;

    // gate lowest percent
    const gateThresholdPercent = 60;
    const loudnessAfterFilter = loudnessPercent - gateThresholdPercent;
    const loudnessFinal = loudnessAfterFilter < 0 ? 0 : loudnessAfterFilter * (100 / (100 - gateThresholdPercent));

    // cut decimals
    return Math.round(loudnessFinal);
  }


  selectBeat(name: string) {
    this._selectedBeatSubject$.next(this.getBeatByName(name));
  }

  private play() {
    if (this._audio) {
      this._audio.play();
      this._audioIsPlayingSubject$.next(true);
    }
  }

  private pause() {
    if (this._audio) {
      this._audio.pause();
      this._audioIsPlayingSubject$.next(false);
    }
  }

  private _loadBeat(beat: Beat): void {
    this._playingBeatSubject$.next(beat);
    this._audioIsPlayingSubject$.next(false);
    this._audio.src = beat.filePath;
    this._audio.load();
  }

  playPause(beat?: Beat) {
    if (beat && beat.name !== this._playingBeatSubject$?.getValue()?.name) {
      this._loadBeat(beat);
      console.log('loaded new beat');
    }
    // canPlayTHrough implementieren: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
    if (this._audioIsPlayingSubject$.getValue()) {
      this.pause();
    } else {
      this.play();
    }
  }

  getBeatByName(name: string): Beat {
    return this.beatList.find(beat => beat.name === name);
  }

  private sortByDate(beatA: Beat, beatB: Beat): number {
    const dateFormat = 'DD.MM.YYYY';
    const dateA = dayjs(beatA.date, dateFormat);
    const dateB = dayjs(beatB.date, dateFormat);

    if (dateA.isBefore(dateB)) {
      return 1
    } else if (dateA.isAfter(dateB)) {
      return -1
    } else {
      return 0
    }
  }
}
