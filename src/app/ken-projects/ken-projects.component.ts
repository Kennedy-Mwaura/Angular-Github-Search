import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { KenUser } from '../ken-gh-class/ken-user';
import { KenRepo } from '../ken-gh-class/ken-repo';
import { KenGhService } from '../ken-gh-service/ken-gh.service';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ken-projects',
  templateUrl: './ken-projects.component.html',
  styleUrls: ['./ken-projects.component.scss']
})
export class KenProjectsComponent implements OnInit {
  ken :KenUser | any;
  repo: KenRepo | any;

  constructor(private ghuserservice: KenGhService, private http: HttpClient) { }

  ngOnInit(): void {
    this.ghuserservice.kenRepoRequest();
    this.ghuserservice.KenRequest();
    this.ken = this.ghuserservice.ken;
    this.repo = this.ghuserservice.repo;
    

  }

}
