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
  private selectedBeat$: Observable<Beat>;

  constructor() {
    this.selectedBeat$ = this.selectedBeatSubject.asObservable();
  }

  selectBeat() {
    this.selectedBeatSubject.next(this.beatList[1]);
  } 

  getSelectedBeat(): Observable<Beat> {
    return this.selectedBeat$;
  }
}
