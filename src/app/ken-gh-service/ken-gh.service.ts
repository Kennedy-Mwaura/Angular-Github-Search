import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { KenUser } from '../ken-gh-class/ken-user';
import { KenRepo } from '../ken-gh-class/ken-repo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KenGhService {
  repo: KenRepo | any;
  ken:KenUser | any;

  getUserInfo(userName: string) {
    return this.http.get(`${environment.apiUrl}/users/${userName}`);
  }

  getRepoInfo(userName: string) {
    return this.http.get(`${environment.apiUrl}/users/${userName}/repos`);
  }

  getRepoInfoByName(userName: string, repoName: string) { 
    return this.http.get(`${environment.apiUrl}/repos/${userName}/${repoName}`);
  }

  getRepoInfoByNameAndOwner(userName: string, repoName: string, owner: string) {
    return this.http.get(`${environment.apiUrl}/repos/${owner}/${repoName}`);
  }

  KenRequest(){
    interface ApiResponse {
      name: string;
      avatar_url: string;
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.kenApiUrl).toPromise().then(response => {
        this.ken.name = response.name;
        this.ken.avatar_link = response.avatar_url;
        console.log(response.avatar_url)

        resolve();
      },
      error => {
        this.ken = "error";
        reject(error);
      });
    });
    return promise;

  }
  kenRepoRequest(){
    interface ApiResponse {
      items: any;
    }
    let promise= new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.kenRepoUrl).toPromise().then(response => {
        this.repo.results = (response as ApiResponse);  
        console.log(this.repo.results[0].name)

        resolve()
      }, error => {
        this.repo.results = "error"
        reject(error)
      });

    });
    return promise;
    
  }


  

  constructor(private http: HttpClient) { 
    this.ken=new KenUser("","");
    this.repo = new KenRepo([]);
  }
}
