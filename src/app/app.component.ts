import { Component, OnInit } from '@angular/core';
import { BeatCoreService } from './services/beat-core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private beatCore: BeatCoreService) { }

  ngOnInit(): void {
    this.beatCore.selectBeat();
  }
}
