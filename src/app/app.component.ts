import {Component, HostListener} from '@angular/core';
import {KeyService} from './services/key.service';
let start = null;
let component = null;
let last = null;

@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  @HostListener('document:keydown', ['$event'])
  handleKeyboardPress(event: KeyboardEvent) {
    this.addKeyPress(event);
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardUp(event: KeyboardEvent) {
    this.addKeyUp(event);
  }


  constructor(public keyService: KeyService) {
  }

  public addKeyPress(key) {
    this.keyService.addKeyPress(key);
  }

  public addKeyUp(key) {
    this.keyService.addKeyUp(key);
  }
}
