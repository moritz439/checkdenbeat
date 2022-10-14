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
  types: string[];
  selectedTypes: string[];

  constructor(private beatCore: BeatCoreService) {
    this.beatList = beatCore.beatList;
    this.selectedTypes = [];
    this.types = [...new Set(this.beatList.flatMap((v) => v.attributes))];
  }

  ngOnInit(): void {
  }

  select(name: string) {
    this.beatCore.selectBeat(name);
  }

  isSelected(type: string): boolean {
    return this.selectedTypes.includes(type);
  }

  toggleSelection(type: string) {
    if (!this.selectedTypes.includes(type)) {
      this.selectedTypes.push(type);
    } else {
      this.selectedTypes = this.selectedTypes.filter(typeEl => type !== typeEl)
    }
  }

}
