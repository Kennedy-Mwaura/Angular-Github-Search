import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectRoutesModule } from './project-routes/project-routes.module';
import { GhUserDetailsComponent } from './gh-user-details/gh-user-details.component';
import { KenProjectsComponent } from './ken-projects/ken-projects.component';
import { HighlightDirective } from './highlight.directive';
import { DateElapsedPipe } from './date-elapsed.pipe';
import { GhRepoDetailsComponent } from './gh-repo-details/gh-repo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    GhUserDetailsComponent,
    KenProjectsComponent,
    HighlightDirective,
    DateElapsedPipe,
    GhRepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ProjectRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
