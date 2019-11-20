import { Component, OnInit } from '@angular/core';
import { WashRequest, RequestStatus, WashType } from 'src/app/core/models/wash-request';

@Component({
  selector: 'app-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.scss']
})
export class AdminRequestListComponent implements OnInit {

  requestList: Array<WashRequest> = [{
    id: '3123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.ACCEPTED,
    washType: WashType.GOLD,
    time: new Date(),
    cleanerAccountId: '234',
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  },
  {
    id: '3123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.CANCELLED,
    washType: WashType.BRONZE,
    time: new Date(),
    cleanerAccountId: '234',
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  },
  {
    id: '3123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.EN_ROUTE,
    washType: WashType.SILVER,
    cleanerAccountId: '234',
    time: new Date(),
    carDetails: {
      category: 'Sedan',
      color: 'blue',
      make: 'Toyota',
      model: 'Corolla',
      plateNumber: 'HIHIHI'
    }
  }];
  constructor() { }

  ngOnInit() {
  }

}
