import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'd883d37f3ee44639ad56d7620e22bdc0';
  constructor(private httpClient: HttpClient) { }

//function to fetch data from api and use to distribute outside using HttpClient 
  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}
 
