import { Component, OnInit } from '@angular/core';
import { RequestStatus, WashType, WashRequest } from 'src/app/core/models/wash-request';

@Component({
  selector: 'app-cleaner-request-list',
  templateUrl: './cleaner-request-list.component.html',
  styleUrls: ['./cleaner-request-list.component.scss']
})
export class CleanerRequestListComponent implements OnInit {
  requestList: Array<WashRequest> = [{
    id: '3123123',
    customerAccountId: '3424234234234',
    status: RequestStatus.ACCEPTED,
    washType: WashType.GOLD,
    time: new Date(),
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
