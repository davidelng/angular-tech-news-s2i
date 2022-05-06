import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../interfaces/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _url: string = 'https://hacker-news.firebaseio.com/v0/'
  
  constructor(private http: HttpClient) { }

  getIDs() {
    return this.http.get<[]>(this._url + 'newstories.json')
  }
  getNewsInfo(id: number): Observable<News> { 
    return this.http.get<News>(this._url + `item/${id}.json`);
  }
}
