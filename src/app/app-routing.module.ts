import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectRoutesModule } from './project-routes/project-routes.module';



const routes: Routes = [
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule, ProjectRoutesModule]
})
export class AppRoutingModule { }
