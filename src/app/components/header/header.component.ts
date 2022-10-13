import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeatCoreService } from 'src/app/services/beat-core.service';
import { Beat } from 'src/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedBeat$: Observable<Beat>;

  constructor(private beatCore: BeatCoreService) {
    this.selectedBeat$ = this.beatCore.selectedBeat$;
  }

  ngOnInit(): void {
  }

  share() {
    alert(2)
  }

}
