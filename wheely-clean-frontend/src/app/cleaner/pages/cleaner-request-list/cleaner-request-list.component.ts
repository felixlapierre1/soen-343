import { Component, OnInit } from '@angular/core';
import { WashStatus, WashType, WashRequest } from 'src/app/core/models/wash-request';
import { RequestHttpClientService } from 'src/app/core/services/request-http-client.service';
import { CustomerHttpClientService } from 'src/app/core/services/customer-http-client.service';
import { CleanerHttpClientService } from 'src/app/core/services/cleaner-http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cleaner-request-list',
  templateUrl: './cleaner-request-list.component.html',
  styleUrls: ['./cleaner-request-list.component.scss']
})
export class CleanerRequestListComponent implements OnInit {

  requestList: Array<WashRequest>;
  constructor(private router: Router, private cleanerService: CleanerHttpClientService) { }

  ngOnInit() {
    this.getRequests();
  }
  getRequests(){
    this.cleanerService.getCleanerRequests('1').subscribe((res) => {
      this.requestList = res;
    });
  }
  goHome(){
    this.router.navigate(['/']);
  }
}
