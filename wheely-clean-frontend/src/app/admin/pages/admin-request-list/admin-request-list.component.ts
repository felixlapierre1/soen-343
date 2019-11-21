import { Component, OnInit } from '@angular/core';
import { WashRequest, WashStatus, WashType } from 'src/app/core/models/wash-request';
import { Cleaner } from 'src/app/core/models/cleaner';
import { HttpHeaders } from '@angular/common/http';
import { CleanerHttpClientService } from 'src/app/core/services/cleaner-http-client.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { RequestHttpClientService } from 'src/app/core/services/request-http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.scss']
})
export class AdminRequestListComponent implements OnInit {

  cleanerList: Array<Cleaner>;
  requestList: Array<WashRequest>;
  constructor(private router: Router, private cleanerService: CleanerHttpClientService, private requestService: RequestHttpClientService) { }

  ngOnInit() {
    this.getCleanerList();
    this.getRequestList();
  }

  getCleanerList() {
    this.cleanerService.getCleaners().subscribe((res) => {
      console.log(res);
      this.cleanerList = res;
    });
  }
  getRequestList(){
    this.requestService.getRequests().subscribe((res) => {
      this.requestList = res;
    });
  }
  updateWash($event: any){
    console.log($event);
    this.requestService.updateRequest($event).subscribe((res) => {
      this.getRequestList();
    });
  }
  goHome(){
    this.router.navigate(['/']);
  }

}
