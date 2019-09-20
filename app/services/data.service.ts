import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiModel } from '../apiModel';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url = "https://jsonplaceholder.typicode.com/photos";
  data;

  apiModel: any;
  apiModelList: apiModel[];
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any[]> {
    if (!this.data)
    {
      this.data = this.httpClient.get<any[]>(this.url);
    }
    
    return this.data;
  }
  
  
  
}