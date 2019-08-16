import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkExperienceComponent } from './pages/workExrerience/work-experience.component';
import { SoftSkillsComponent } from './pages/softSkills/softSkills.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';

const routes: Routes = [
  { path: 'WorkExperienceComponent', component: WorkExperienceComponent },
  { path: 'SoftSkillsComponent', component: SoftSkillsComponent },
  { path: 'HeaderComponent', component: HeaderComponent },
  { path: 'FooterComponent', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
