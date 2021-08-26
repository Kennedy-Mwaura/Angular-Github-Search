import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from '../landing-page/landing-page.component';


const routes: Routes = [
  {path: 'home', component: LandingPageComponent}, 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProjectRoutesModule { }
