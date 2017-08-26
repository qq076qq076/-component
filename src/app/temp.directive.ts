import { Directive, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';

import { ViewContainerRef } from '@angular/core';
import { TempComponent } from './temp/temp.component';

@Directive({
  selector: '[appTemp]'
})
export class TempDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  // createTemp(tempComponent: { new(): TempComponent }): ComponentRef<TempComponent> {
  //   // 移除上一個建立的元件
  //   // this.viewContainer.clear();
  //   let tempComponentFactory;
  //   let tempComponentRef;
  //   tempComponentFactory = this.componentFactoryResolver.resolveComponentFactory(tempComponent);
  //   tempComponentRef = this.viewContainer.createComponent(tempComponentFactory);

  //   tempComponentRef.instance.close.subscribe(() => {
  //     tempComponentRef.destroy();
  //   });

  //   return tempComponentRef;
  // }

  createTemp2(tempArray: any[]) {
    // 移除建立的元件
    // this.viewContainer.clear();
    tempArray.forEach((val, index) => {
      let tempComponentFactory;
      let tempComponentRef;
      tempComponentFactory = this.componentFactoryResolver.resolveComponentFactory(val);
      tempComponentRef = this.viewContainer.createComponent(tempComponentFactory);

      tempComponentRef.instance.close.subscribe(() => {
        tempComponentRef.destroy();
      });

    });
  }

  closeAll() {
    this.viewContainer.clear();
  }
}
