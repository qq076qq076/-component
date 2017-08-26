import { Component, ViewChild } from '@angular/core';
import { TempDirective } from './temp.directive';
import { TempComponent } from './temp/temp.component';
import { Temp2Component } from './temp2/temp2.component';
import { Temp3Component } from './temp3/temp3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(TempDirective) appTemp: TempDirective;
  title = 'app';

  addTemp() {
    // this.appTemp.createTemp(TempComponent);
    this.appTemp.createTemp2([TempComponent, Temp2Component]);
    // this.appTemp.creatInput([TempComponent, Temp2Component, Temp3Component]);
  }

  cleanTemp() {
    this.appTemp.closeAll();
  }
}
