import { Component, ElementRef,OnInit, ViewChild } from '@angular/core';
import { GhUserService } from '../github-search-service/gh-user.service';
import { GhRepoSearchService } from '../github-search-service/gh-repo-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('search') el!: ElementRef;
  userSearch(searchTerm: HTMLInputElement) {
    if (searchTerm.value==='') {
      alert('Please enter a name');
      searchTerm.focus();
      return;
    }
    this.ghuserservice.userSearch(searchTerm);
    this.el.nativeElement.value = '';
  }

  repoSearch(searchTerm: HTMLInputElement) {
    if (searchTerm.value==='') {
      alert('Please enter a name');
      searchTerm.focus();
      return;
    }
    console.log(searchTerm.value);
    this.ghreposearchservice.repoSearch(searchTerm);
    this.el.nativeElement.value = '';
  }

  constructor(private ghuserservice: GhUserService, private ghreposearchservice: GhRepoSearchService) { }

  ngOnInit(): void {
  }

}
