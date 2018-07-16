import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllItemsService {
  public items = [];

  constructor() { }
  public add(item) {
    this.items.push(item);
  }
}
