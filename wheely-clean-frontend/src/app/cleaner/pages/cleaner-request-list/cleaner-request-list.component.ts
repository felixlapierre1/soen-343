import { Component, OnInit } from '@angular/core';
import { WashStatus, WashType, WashRequest } from 'src/app/core/models/wash-request';
import { RequestHttpClientService } from 'src/app/core/services/request-http-client.service';
import { CustomerHttpClientService } from 'src/app/core/services/customer-http-client.service';
import { CleanerHttpClientService } from 'src/app/core/services/cleaner-http-client.service';

@Component({
  selector: 'app-cleaner-request-list',
  templateUrl: './cleaner-request-list.component.html',
  styleUrls: ['./cleaner-request-list.component.scss']
})
export class CleanerRequestListComponent implements OnInit {
  // requestList: Array<WashRequest> = [{
  //   id: '3123123',
  //   customerAccountId: '3424234234234',
  //   status: WashStatus.accepted,
  //   washType: WashType.gold,
  //   time: new Date(),
  //   carDetails: {
  //     category: 'Sedan',
  //     color: 'blue',
  //     make: 'Toyota',
  //     model: 'Corolla',
  //     plateNumber: 'HIHIHI'
  //   }
  // },
  // {
  //   id: '3123123',
  //   customerAccountId: '3424234234234',
  //   status: WashStatus.cancelled,
  //   washType: WashType.bronze,
  //   time: new Date(),
  //   carDetails: {
  //     category: 'Sedan',
  //     color: 'blue',
  //     make: 'Toyota',
  //     model: 'Corolla',
  //     plateNumber: 'HIHIHI'
  //   }
  // },
  // {
  //   id: '3123123',
  //   customerAccountId: '3424234234234',
  //   status: WashStatus.enRoute,
  //   washType: WashType.silver,
  //   time: new Date(),
  //   carDetails: {
  //     category: 'Sedan',
  //     color: 'blue',
  //     make: 'Toyota',
  //     model: 'Corolla',
  //     plateNumber: 'HIHIHI'
  //   }
  // }];
 requestList: Array<WashRequest>;
  constructor(private cleanerService: CleanerHttpClientService) { }

  ngOnInit() {
    this.getRequests();
  }
  getRequests(){
    this.cleanerService.getCleanerRequests('1').subscribe((res) => {
      this.requestList = res;
    });
  }

}
