import { Component, OnInit } from '@angular/core';
import { WashRequest, WashStatus, WashType } from 'src/app/core/models/wash-request';
import { Router } from '@angular/router';
import { CustomerHttpClientService } from 'src/app/core/services/customer-http-client.service';

@Component({
  selector: 'app-customer-request-list',
  templateUrl: './customer-request-list.component.html',
  styleUrls: ['./customer-request-list.component.scss']
})
export class CustomerRequestListComponent implements OnInit {

  requestList: Array<WashRequest>;
  constructor(private router: Router, private customerService: CustomerHttpClientService) { }

  ngOnInit() {
    this.getRequests();
  }

  openCreateRequest(){
    this.router.navigate(['/customer/create-request']);
  }

  openWashDetails(washId){
    this.router.navigate([`/customer/create-request/${washId}`]);
  }

  goHome(){
    this.router.navigate(['/']);
  }

  getRequests(){
    this.customerService.getCustomerRequestsForCustomerId('2').subscribe((res) => {
      console.log(res);
      this.requestList = res;
      console.log(this.requestList);
      
    });
  }

}
