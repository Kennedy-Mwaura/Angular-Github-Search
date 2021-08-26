import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GhRepoSearchService } from '../github-search-service/gh-repo-search.service';


@Component({
  selector: 'app-gh-repo-details',
  templateUrl: './gh-repo-details.component.html',
  styleUrls: ['./gh-repo-details.component.scss']
})
export class GhRepoDetailsComponent implements OnInit {
  repo: any;

  constructor(private reposearchservice: GhRepoSearchService) { }

  ngOnInit(): void {
    this.repo = this.reposearchservice.returnRepo();
  }

}
