import { trigger, transition, query, stagger, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BeatCoreService } from 'src/app/services/beat-core.service';
import { Beat } from 'src/models';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
        )
      ])
    ])
  ]

})
export class BodyComponent implements OnInit {

  beatList: Beat[];
  beatListUnwanted: Beat[];
  types: string[];
  selectedTypes: string[];

  constructor(private beatCore: BeatCoreService) {
    this.beatList = beatCore.beatList;
    this.beatListUnwanted = [];
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

    if (this.selectedTypes.length === 0) {
      this.beatList = this.beatCore.beatList;
      this.beatListUnwanted = [];
    } else {
      this.beatList = this.beatCore.beatList.filter(beat => beat.attributes.some(attr => this.selectedTypes.includes(attr)))
      this.beatListUnwanted = this.beatCore.beatList.filter(beat => !beat.attributes.some(attr => this.selectedTypes.includes(attr)))
    }

    window.scrollTo({top: 1000, behavior: 'smooth'})
  }

}
