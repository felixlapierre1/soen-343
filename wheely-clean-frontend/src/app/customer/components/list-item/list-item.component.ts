import { Component, OnInit, Input } from '@angular/core';
import { WashRequest, WashStatus } from 'src/app/core/models/wash-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() request: WashRequest;
  @Input() userType: string;
  icon: string;
  color: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.generateIconName();
  }

  generateIconName() {
    if (this.request.status === WashStatus[WashStatus.accepted]) {
      this.icon = 'thumb_up';
      this.color = 'pink';
    }
    if (this.request.status === 'pending') {
      this.icon = 'access_time';
      this.color = 'grey';
    }
    if (this.request.status === 'enRoute') {
      this.icon = 'directions_car';
      this.color = 'black';
    }
    if (this.request.status === 'inProgress') {
      this.icon = 'local_car_wash';
      this.color = 'blue';
    }
    if (this.request.status === 'cancelled') {
      this.icon = 'cancel';
      this.color = 'red';
    }
    if (this.request.status === 'completed') {
      this.icon = 'check_circle';
      this.color = 'green';
    }

  }
  onClick(){
    if (this.userType === 'cleaner') {
      this.router.navigate(['/cleaner','wash-details', `${this.request.id}`], { state: { request: this.request } });
      // this.router.navigate(['/cleaner/wash-details', this.request.id] );

    }
    else if (this.userType === 'customer') {
      this.router.navigate(['/customer','wash-details', `${this.request.id}`], { state: { request: this.request } });
      // this.router.navigate(['/cleaner/wash-details', this.request.id] );

    }
  } 

}
