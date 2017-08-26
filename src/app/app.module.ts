import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempComponent } from './temp/temp.component';
import { TempDirective } from './temp.directive';
import { Temp2Component } from './temp2/temp2.component';
import { Temp3Component } from './temp3/temp3.component';

@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    TempDirective,
    Temp2Component,
    Temp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [TempComponent, Temp2Component, Temp3Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
