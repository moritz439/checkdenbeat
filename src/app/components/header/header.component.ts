import { animate, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { BeatCoreService } from 'src/app/services/beat-core.service';
import { Beat } from 'src/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, height: 0, padding: 0 }),
        animate("200ms ease-in-out", style({ opacity: 1, height: '*', padding: '*' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0, height: 0, padding: 0 })),
      ])
    ])
  ]
})
export class HeaderComponent {

  selectedBeat$: Observable<Beat>;
  selectedBeatAdditionalInfos$: Observable<string[]>;
  audioIsPlaying$: Observable<boolean>;
  shareOpen = false;
  url: string;
  copyLinkButtonText = 'copy link';

  ampBass;

  constructor(private beatCore: BeatCoreService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.pipe(map(params => params.get('beat')))
      .subscribe(v => this.beatCore.selectBeat(v));
    this.selectedBeat$ = this.beatCore.selectedBeat$;
    this.audioIsPlaying$ = this.beatCore.audioIsPlaying$;
    this.selectedBeat$.subscribe(() => this.shareOpen = false);

    setInterval(() => {
      this.ampBass = this.beatCore.getBassAmp();
    }, 1)
  }

  share() {
    this.url = window.location.href;
    this.shareOpen = !this.shareOpen;
  }

  play(name: string) {
    this.beatCore.playPause();
  }

  copyURL() {
    navigator.clipboard.writeText(window.location.href);
    this.copyLinkButtonText = 'link copied!';
    setTimeout(() => {
      this.copyLinkButtonText = 'copy link';
    }, 2000)
  }
}
