import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css']
})
export class Temp2Component {
  close = new EventEmitter();
  constructor() { }
  exitthis() {
    this.close.emit('event');
  }
}
