import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BeatCoreService } from 'src/app/services/beat-core.service';
import { Beat } from 'src/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  selectedBeat$: Observable<Beat>;

  constructor(private beatCore: BeatCoreService) {
    this.selectedBeat$ = this.beatCore.getSelectedBeat();
    this.selectedBeat$.subscribe(console.log)
  }

  share() {
    alert(2)
  }
}
