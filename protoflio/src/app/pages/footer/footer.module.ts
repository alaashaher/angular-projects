import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [FooterComponent]
})
export class FooterModule { }
