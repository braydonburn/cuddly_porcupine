import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { ClipchampElementComponent } from './clipchamp-element/clipchamp-element.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ClipchampElementComponent
  ],
  entryComponents: [
    ClipchampElementComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ClipchampElementComponent, { injector });
    customElements.define('clipchamp-element', customElement);
  }

  ngDoBootstrap() { }
}
