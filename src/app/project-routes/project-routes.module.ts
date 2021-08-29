import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from '../landing-page/landing-page.component';
import { GhRepoDetailsComponent } from '../gh-repo-details/gh-repo-details.component';
import { GhUserDetailsComponent } from '../gh-user-details/gh-user-details.component';
import { KenProjectsComponent } from '../ken-projects/ken-projects.component';


const routes: Routes = [
  {path: 'home', component: LandingPageComponent}, 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  {path: 'repositories', component:GhRepoDetailsComponent},
  {path: 'users', component:GhUserDetailsComponent},
  {path: 'projects', component:KenProjectsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProjectRoutesModule { }
