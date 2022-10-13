import { Injectable } from '@angular/core';
import { Observable, shareReplay, Subject } from 'rxjs';
import { beats } from 'src/assets/beats';
import { Beat } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class BeatCoreService {

  beatList: Beat[] = [...beats];

  private selectedBeatSubject: Subject<Beat> = new Subject();
  selectedBeat$: Observable<Beat>;

  constructor() {
    this.selectedBeat$ = this.selectedBeatSubject.asObservable().pipe(shareReplay(1));
  }

  selectBeat() {
    this.selectedBeatSubject.next(this.beatList[1]);
  }
}
