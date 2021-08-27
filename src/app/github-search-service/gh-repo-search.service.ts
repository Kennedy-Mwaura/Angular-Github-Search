import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GhRepo } from '../gh-repo-search/gh-repo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GhRepoSearchService {
  repo!: GhRepo;


  getRepos(query: string) {
    return this.http.get(`https://api.github.com/search/repositories?q=${query}`);
    
  }

  getRepo(query: string) {
    return this.http.get(`https://api.github.com/search/repositories?q=${query}`);
  }
  repoSearch(query: HTMLInputElement) {
    let repoApi = (environment.repoSearch + query.value);
    console.log(repoApi, 'repoApi');
    console.log(query.value, 'query.value');  // this is the search query
    
    interface ApiResponse {
      items: any;
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(repoApi).toPromise().then(response => {
        this.repo.results = (response.items);
        resolve();
      },
        error => {
          this.repo = new GhRepo([]);
          reject(error);
        });
    });
    return promise;
  }
  returnRepo(){
    return this.repo;
  }

  
  constructor(private http: HttpClient) { 
    this.repo = new GhRepo([]);
  }
}
