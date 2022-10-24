import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { Beat } from 'src/models';

dayjs.extend(customParseFormat);

@Component({
  selector: 'app-beat-listitem',
  templateUrl: './beat-listitem.component.html',
  styleUrls: ['./beat-listitem.component.scss']
})
export class BeatListitemComponent {

  @Input() beat: Beat;

  constructor() {}
}
