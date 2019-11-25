import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Customer } from '../models/customer';
import { WashRequest } from '../models/wash-request';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpClientService {

  configUrl = 'http://localhost:8080/customer';
  requestUrl = 'http://localhost:8080/request';
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<Array<Customer>>(`${this.configUrl}/all`);
  }
  getCustomer(id: string) {
    return this.http.get<Customer>(this.configUrl, {
      params: new HttpParams().set('id', id)
    });
  }
  getCustomerRequestsForCustomerId(customerId: string) {
    return this.http.get<Array<WashRequest>>(`${this.configUrl}/requests`, {
      params: new HttpParams().set('id', customerId)
    });
  }
  getCustomerRequestByRequestId(requestId: string){
    return this.http.get<WashRequest>(`${this.baseUrl}/request`, {
      params: new HttpParams().set('id', requestId)
    });
  }
  putCustomerWashRequestByRequestId(request: WashRequest){
    delete request.cleanerAccountId;
    return this.http.put<WashRequest>(this.requestUrl, request);
  }
}
