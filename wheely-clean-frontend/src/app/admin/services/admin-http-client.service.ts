import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cleaner } from 'src/app/core/models/cleaner';


@Injectable({
  providedIn: 'root'
})
export class AdminHttpClientService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   }),
  //   mode: 'no-cors'
  // };
  configUrl = 'http://localhost:8080/cleaner/all';
  data: any;
  constructor(private http: HttpClient) { }

  getCleaners() {
    return this.http.get<Array<Cleaner>>(this.configUrl);
  }
}
