import { Component, OnInit } from '@angular/core';
import { WashRequest } from 'src/app/core/models/wash-request';
import { CleanerHttpClientService } from 'src/app/core/services/cleaner-http-client.service';
import { Router } from '@angular/router';
import { CLEANER_ID} from 'src/env.js';
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
    this.cleanerService.getCleanerRequests(CLEANER_ID).subscribe((res) => {
      this.requestList = res;
    });
  }
  goHome(){
    this.router.navigate(['/']);
  }
}
