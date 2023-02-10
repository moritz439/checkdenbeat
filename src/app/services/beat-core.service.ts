import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { BehaviorSubject, Observable, Subject, switchMap, tap, withLatestFrom } from 'rxjs';
import { beats } from 'src/assets/beats';
import { Beat } from 'src/models';

dayjs.extend(customParseFormat);

@Injectable({
  providedIn: 'root'
})
export class BeatCoreService {

  beatList: Beat[];

  private _selectedBeatSubject: BehaviorSubject<Beat> = new BehaviorSubject(undefined);
  selectedBeat$: Observable<Beat>;

  private _audio: HTMLAudioElement;
  private _audioIsPlayingSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  audioIsPlaying$: Observable<boolean>;
  private _audioIsPlaying: boolean = false;


  constructor() {
    this.beatList = [...beats].sort(this.sortByDate)

    this._audioIsPlayingSubject$.subscribe(isPlaying => this._audioIsPlaying = isPlaying);
    this.audioIsPlaying$ = this._audioIsPlayingSubject$.asObservable();

    this.selectedBeat$ = this._selectedBeatSubject.asObservable();
  }

  selectBeat(name: string) {
    this.pause()
    this._selectedBeatSubject.next(this.getBeatByName(name));
    this._audio = new Audio(this.getBeatByName(name).filePath);
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

  playPause() {
    // canPlayTHrough implementieren: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
    if (this._audioIsPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  getRandomBeatName(): string {
    const randomIndex =
      Math.floor(Math.random() * this.beatList.length);
    return this.beatList[randomIndex].name;
  }

  private getBeatByName(name: string): Beat {
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
