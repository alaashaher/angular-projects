import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SoftSkillsComponent } from './softSkills.component';

@NgModule({
  declarations: [
    SoftSkillsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [SoftSkillsComponent]
})
export class SoftSkillsModule { }
