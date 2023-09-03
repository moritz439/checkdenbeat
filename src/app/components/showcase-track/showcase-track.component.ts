import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';
import { fade } from 'src/animations';
import { BeatCoreService } from 'src/app/services/beat-core.service';
import { Beat } from 'src/models';

@Component({
  selector: 'app-showcase-track',
  templateUrl: './showcase-track.component.html',
  styleUrls: ['./showcase-track.component.scss'],
  animations: [fade]
})
export class ShowcaseTrackComponent {
  selectedBeat$: Observable<Beat>;
  audioIsPlaying$: Observable<boolean>;

  selectedBeatIsPlayingBeat$: Observable<boolean>;
  shareOpen = false;
  url: string;
  copyLinkButtonText = 'copy link';

  ampBass;

  constructor(private beatCore: BeatCoreService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.pipe(map(params => params.get('beat')))
      .subscribe(v => this.beatCore.selectBeat(v));
    this.selectedBeat$ = this.beatCore.selectedBeat$;
    this.audioIsPlaying$ = this.beatCore.audioIsPlaying$;
    this.selectedBeatIsPlayingBeat$ = combineLatest([this.selectedBeat$, this.beatCore.playingBeat$]).pipe(map(([a, b]) => a?.name === b?.name));


    this.selectedBeat$.subscribe(() => this.shareOpen = false);
    // TODO schöner lösen
    setInterval(() => {
      this.ampBass = this.beatCore.getBassAmp();
    }, 1)
  }

  share() {
    this.url = window.location.href;
    this.shareOpen = !this.shareOpen;
  }

  play(beat: Beat) {
    this.beatCore.playPause(beat);
  }

  copyURL() {
    navigator.clipboard.writeText(window.location.href);
    this.copyLinkButtonText = 'link copied!';
    setTimeout(() => {
      this.copyLinkButtonText = 'copy link';
    }, 2000)
  }

}
