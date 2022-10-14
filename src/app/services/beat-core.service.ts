import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, shareReplay, Subject, take } from 'rxjs';
import { beats } from 'src/assets/beats';
import { Beat } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class BeatCoreService {

  beatList: Beat[] = [...beats];

  private selectedBeatSubject: BehaviorSubject<Beat>;
  private selectedBeat$: Observable<Beat>;

  constructor(private route: ActivatedRoute) {
    // does not work. need to fix
    let beatFromRoute = this.route.snapshot.queryParams['beat'];
    console.log('param Beat is ', beatFromRoute)
    let activeBeatName =  beatFromRoute || this.getRandomBeatName();
    this.selectedBeatSubject = new BehaviorSubject(this.getBeatByName(activeBeatName))

    this.selectedBeat$ = this.selectedBeatSubject.asObservable();
  }

  selectBeat(name: string) {
    this.selectedBeatSubject.next(this.getBeatByName(name));
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  getSelectedBeat(): Observable<Beat> {
    return this.selectedBeat$;
  }

  private getBeatByName(name: string): Beat  {
    return this.beatList.find(beat => beat.name === name);
  }

  private getRandomBeatName(): string {
    const randomIndex =
      Math.floor(Math.random() * this.beatList.length);
    return this.beatList[randomIndex].name;
  }
}
