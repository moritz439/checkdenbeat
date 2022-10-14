import { Component, OnInit } from '@angular/core';
import { BeatCoreService } from 'src/app/services/beat-core.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss']
})
export class SharePageComponent implements OnInit {

  constructor(private beatCore: BeatCoreService) { }

  ngOnInit(): void {
  }

}
