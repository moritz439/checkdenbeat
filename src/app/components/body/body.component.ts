import { Component, OnInit } from '@angular/core';
import { BeatCoreService } from 'src/app/services/beat-core.service';
import { Beat } from 'src/models';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  beatList: Beat[];

  constructor(private beatCore: BeatCoreService) {
    this.beatList = beatCore.beatList;
  }

  ngOnInit(): void {
  }

}
