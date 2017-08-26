import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {

  close = new EventEmitter();
  constructor() { }
  exitthis() {
    this.close.emit('event');
  }
}
