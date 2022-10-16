import { trigger, transition, animate, style } from '@angular/animations';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
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
export class HeaderComponent implements AfterContentInit {

  selectedBeat$: Observable<Beat>;
  shareOpen = false;

  constructor(private beatCore: BeatCoreService, private router: Router, private route: ActivatedRoute) {
    const beatParamIsSet = !!this.route.snapshot.paramMap.get('beat');
    if (!beatParamIsSet) {
      this.router.navigate([this.beatCore.getRandomBeatName()]);
    }

    this.route.paramMap.pipe(map(params => params.get('beat')))
      .subscribe(v => this.beatCore.selectBeat(v));

    this.selectedBeat$ = this.beatCore.getSelectedBeat();

    this.selectedBeat$.subscribe(() => this.shareOpen = false)
  }

  ngAfterContentInit(): void {

  }

  share() {
    this.shareOpen = !this.shareOpen;
  }

  download() {

  }

  play() {

  }

  copyURL() {
    navigator.clipboard.writeText(window.location.href);
  }
}
