import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { beats } from 'src/assets/beats';
import { Beat } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class BeatCoreService {

  beatList: Beat[] = [...beats];

  private selectedBeatSubject: BehaviorSubject<Beat>;
  private selectedBeat$: Observable<Beat>;

  constructor() {
    this.selectedBeatSubject = new BehaviorSubject(undefined);
    this.selectedBeat$ = this.selectedBeatSubject.asObservable();
  }

  selectBeat(name: string) {
    this.selectedBeatSubject.next(this.getBeatByName(name));
  }

  getSelectedBeat(): Observable<Beat> {
    return this.selectedBeat$;
  }

  private getBeatByName(name: string): Beat {
    return this.beatList.find(beat => beat.name === name);
  }

  getRandomBeatName(): string {
    const randomIndex =
      Math.floor(Math.random() * this.beatList.length);
    return this.beatList[randomIndex].name;
  }
}
