import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WashType, WashRequest, WashStatus } from '../../../core/models/wash-request';
import { FdDate } from '@fundamental-ngx/core';
import { RequestHttpClientService } from 'src/app/core/services/request-http-client.service';
import { CUSTOMER_ID } from '../../../../env.js';
@Component({
  selector: 'app-customer-request-create',
  templateUrl: './customer-request-create.component.html',
  styleUrls: ['./customer-request-create.component.scss']
})
export class CustomerRequestCreateComponent implements OnInit {


  // map info
  defaultLatitude = 45.4963778;
  defaultLongitude = -73.5779553;
  mapType = 'satellite';

  // map marker info
  markerLatitude = null;
  markerLongitude = null;

  // car info
  make: string = null;
  model: string = null;
  color: string = null;
  category: string = null;
  plateNumber: string = null;

  //wash info
  type: WashType = null;
  typeKeys(): Array<string> {
    var keys = Object.values(WashType);
    return keys;
  }
  date = FdDate.getToday();
  time: any = {
    hour: 12,
    minute: 0,
    second: 0
  };

  constructor(private router: Router, private requestService: RequestHttpClientService) { }

  ngOnInit() {
  }

  closeCreateRequest() {
    this.router.navigate(['/customer']);
  }

  addMarker(lat: number, lng: number) {
    this.markerLatitude = lat;
    this.markerLongitude = lng;
  }

  submit() {

    const formattedH = ("0" + this.time.hour).slice(-2);
    const formattedM = ("0" + this.time.minute).slice(-2);
    const formattedS = ("0" + this.time.second).slice(-2);

    const dateTime = `${this.date.year}-${this.date.month}-${this.date.day}T${formattedH}:${formattedM}:${formattedS}`;

    const request: WashRequest = {
      carDetails: {
        category: this.category,
        color: this.color,
        make: this.make,
        model: this.model,
        plateNumber: this.plateNumber
      },
      customerAccountId: CUSTOMER_ID, // hardcode, this would be the id of the user if we had auth and could get current user
      location: {
        latitude: this.markerLatitude,
        longitude: this.markerLongitude
      },
      status: WashStatus.pending,
      washType: this.type,
      time: dateTime
    };
    console.log(request);


    this.requestService.createRequest(request).subscribe((res) => {
      this.router.navigate(['/customer']);
    });
  }


}
