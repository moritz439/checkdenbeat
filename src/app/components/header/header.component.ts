import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { BeatCoreService } from 'src/app/services/beat-core.service';
import { ShareService } from 'src/app/services/share.service';
import { Beat } from 'src/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentInit {

  selectedBeat$: Observable<Beat>;

  constructor(private beatCore: BeatCoreService, private shareService: ShareService) {
    this.selectedBeat$ = this.beatCore.getSelectedBeat();
  }

  ngAfterContentInit(): void {

  }

  share() {
    this.shareService.open();
  }

  download() {

  }

  play() {

  }
}
