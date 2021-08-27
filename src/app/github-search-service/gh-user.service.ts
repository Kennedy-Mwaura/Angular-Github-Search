import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GhUser } from '../gh-user-search/gh-user'; 

@Injectable({
  providedIn: 'root'
})
export class GhUserService {
  user: GhUser | any;
  
  
  userSearch(userSearch: HTMLInputElement){
    let apiUser = (environment.ghSearchUser+ userSearch.value);

    interface ApiResponse{
      results: any
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(apiUser).toPromise().then(response => {
        this.user.results = response.results;
        resolve()
      },
      error => {
        this.user = 'error';
        reject(error)
      })
    })
      //return promise.promise();
    }
    returnUser() {
      return this.user;
    }

  
  constructor(private http: HttpClient) { 
    this.user = new GhUser([]);
  }
}


  


