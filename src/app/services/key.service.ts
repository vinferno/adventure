import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyService {
  public pressed = new BehaviorSubject(null);
  public up = new BehaviorSubject(null);

  constructor() { }
  public addKeyPress(key) {
    this.pressed.next(key);
  }
  public addKeyUp(key) {
    this.up.next(key);
  }
}
