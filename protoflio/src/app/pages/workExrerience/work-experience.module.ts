import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WorkExperienceComponent } from './work-experience.component';

@NgModule({
  declarations: [
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [WorkExperienceComponent]
})
export class WorkExperienceModule { }
