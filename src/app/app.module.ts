import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule } from '@angular/forms';

import { KenGhService } from './ken-gh-service/ken-gh.service';
import { GhUserService } from './github-search-service/gh-user.service';
import { GhRepoSearchService } from './github-search-service/gh-repo-search.service';
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
    HttpClientModule,
    ProjectRoutesModule,
    FormsModule,
  ],
  providers: [KenGhService, GhUserService, GhRepoSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
