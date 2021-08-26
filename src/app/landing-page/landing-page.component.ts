import { Component, OnInit } from '@angular/core';

import { KenUser } from '../ken-gh-class/ken-user';
import { KenGhService } from '../ken-gh-service/ken-gh.service';
import { GhUserService } from '../github-search-service/gh-user.service';
import { GhRepoSearchService } from '../github-search-service/gh-repo-search.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  ken:KenUser | any;


  constructor(private user: KenGhService) { }

  ngOnInit(): void {
    this.user.KenRequest();
    this.ken = this.user.ken;
  }

}
