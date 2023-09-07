import { Component, OnInit } from '@angular/core';
import { beats } from 'src/assets/beats';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent implements OnInit {

  beatList = beats;

  constructor() { }

  ngOnInit(): void {
  }

}
