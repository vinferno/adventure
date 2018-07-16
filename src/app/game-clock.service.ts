import { Injectable } from '@angular/core';


import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameClockService {
  public clock = new BehaviorSubject(0);
  constructor() {
    setInterval( () => {
      this.clock.next(this.clock.value + 1);
    }, 10);
  }
}
