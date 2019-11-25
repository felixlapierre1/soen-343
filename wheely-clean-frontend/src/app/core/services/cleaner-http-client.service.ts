import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cleaner } from '../models/cleaner';
import { WashRequest } from '../models/wash-request';

@Injectable({
  providedIn: 'root'
})
export class CleanerHttpClientService {

  configUrl = 'http://localhost:8080/cleaner';
  requestUrl = 'http://localhost:8080/request';
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCleaners() {
    return this.http.get<Array<Cleaner>>(`${this.configUrl}/all`);
  }
  getCleaner(id: string) {
    return this.http.get<Cleaner>(this.configUrl, { params: new HttpParams().set('id', id)
  });
  }
  getCleanerRequests(id: string){
    return this.http.get<Array<WashRequest>>(`${this.configUrl}/requests`, { params: new HttpParams().set('id', id)
  });
  }
  getCleanerRequestById(requestId: string){
    return this.http.get<WashRequest>(`${this.baseUrl}/request`, {
      params: new HttpParams().set('id', requestId)
    });
  }
  putCleanerRequest(request : WashRequest){
    return this.http.put<WashRequest>(this.requestUrl, request);
  }
}
