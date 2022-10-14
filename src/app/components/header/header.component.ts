import { trigger, transition, animate, style } from '@angular/animations';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
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
        animate("200ms ease-in-out",  style({ opacity: 1, height: '*', padding: '*' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0, height: 0, padding: 0})),
      ])
    ])
  ]
})
export class HeaderComponent implements AfterContentInit {

  selectedBeat$: Observable<Beat>;
  shareOpen = false;

  constructor(private beatCore: BeatCoreService) {
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
}
