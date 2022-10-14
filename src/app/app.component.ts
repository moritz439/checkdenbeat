import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { __param } from 'tslib';
import { BeatCoreService } from './services/beat-core.service';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  shareIsOpen$ = this.shareService.isOpenSubject$;

  constructor(private shareService: ShareService) { }
}
