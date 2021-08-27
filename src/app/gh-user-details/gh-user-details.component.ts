import { Component, OnInit } from '@angular/core';
import { GhUserService } from '../github-search-service/gh-user.service';

@Component({
  selector: 'app-gh-user-details',
  templateUrl: './gh-user-details.component.html',
  styleUrls: ['./gh-user-details.component.scss']
})
export class GhUserDetailsComponent implements OnInit {
  user: any;

  constructor( private ghuserservice: GhUserService) { 
  }


  
  ngOnInit(): void {
    this.user = this.ghuserservice.returnUser();
  }

}
