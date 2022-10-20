import { Component, Input, OnInit } from '@angular/core';
import { Beat } from 'src/models';

@Component({
  selector: 'app-beat-listitem',
  templateUrl: './beat-listitem.component.html',
  styleUrls: ['./beat-listitem.component.scss']
})
export class BeatListitemComponent {

  @Input() beat: Beat;

  constructor() {}
}
