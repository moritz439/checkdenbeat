import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BeatCoreService } from 'src/app/services/beat-core.service';
import { Beat } from 'src/models';

@Component({
  selector: 'app-beat-selector',
  templateUrl: './beat-selector.component.html',
  styleUrls: ['./beat-selector.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({ opacity: 0 }), stagger('90ms', animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' })))],
        )
      ])
    ])
  ]

})
export class BeatSelectorComponent {
  beatList: Beat[];
  beatListUnwanted: Beat[];
  types: string[];
  selectedTypes: string[];

  @ViewChild("typeSelector") typeSelector: ElementRef<HTMLElement>;

  constructor(private beatCore: BeatCoreService, private router: Router) {
    this.beatList = beatCore.beatList;
    this.beatListUnwanted = [];
    this.selectedTypes = [];
    this.types = [...new Set(this.beatList.flatMap((v) => v.attributes))].sort();
  }

  select(name: string) {
    this.router.navigate(['track', name]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      this.beatList = this.beatCore.beatList.filter(beat => this.descriptorsMatchAttributes(beat.attributes))
      this.beatListUnwanted = this.beatCore.beatList.filter(beat => !this.descriptorsMatchAttributes(beat.attributes))
    }

    const guesstimationHeaderHeight = 80;
    const offsetTop = window.scrollY + this.typeSelector.nativeElement.getBoundingClientRect().top - guesstimationHeaderHeight;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
  }

  descriptorsMatchAttributes(descriptors: string[]): boolean {
    return this.selectedTypes.every(attribute => descriptors.includes(attribute));
  }
}
