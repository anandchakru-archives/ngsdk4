import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement, WithProperties, NgElement } from '@angular/elements';
import { NgsdkLibModule } from 'ngsdk-lib';

declare global {
  interface HTMLElementTagNameMap {
    'n4-ngsdk-elem': NgElement & WithProperties<{ fireconfig: string }>;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgsdkLibModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    if (!customElements.get('n4-ngsdk-elem')) {
      customElements.define('n4-ngsdk-elem', createCustomElement(AppComponent, { injector: this.injector }));
    }
  }
}
