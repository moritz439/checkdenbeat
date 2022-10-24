import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { BehaviorSubject, Observable } from 'rxjs';
import { beats } from 'src/assets/beats';
import { Beat } from 'src/models';

dayjs.extend(customParseFormat);

@Injectable({
  providedIn: 'root'
})
export class BeatCoreService {

  beatList: Beat[];

  private selectedBeatSubject: BehaviorSubject<Beat>;
  private selectedBeat$: Observable<Beat>;

  constructor() {
    this.beatList = [...beats].sort(this.sortByDate)
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

  sortByDate(beatA: Beat, beatB: Beat): number {
    const dateFormat = 'DD.MM.YYYY';
    const dateA = dayjs(beatA.date, dateFormat);
    const dateB = dayjs(beatB.date, dateFormat);
    console.log(dateA)
    if (dateA.isBefore(dateB)) {
      return 1
    } else if (dateA.isAfter(dateB)) {
      return -1
    } else {
      return 0
    }
  }
}
