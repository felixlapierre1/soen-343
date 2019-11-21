import { Component, OnInit } from '@angular/core';
import { WashRequest, WashType, WashStatus } from 'src/app/core/models/wash-request';
import { CleanerHttpClientService } from 'src/app/core/services/cleaner-http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cleaner-request-details',
  templateUrl: './cleaner-request-details.component.html',
  styleUrls: ['./cleaner-request-details.component.scss']
})
export class CleanerRequestDetailsComponent implements OnInit {
  statuses = [{ value: 'inProgress', viewValue: 'In Progress' },
  { value: 'enRoute', viewValue: 'En Route' },
  { value: 'completed', viewValue: 'Completed' },
  { value: 'accepted', viewValue: 'Accepted' }];

  request: WashRequest;
  defaultLatitude  = 45.4963778;
  defaultLongitude  = -73.5779553;
  mapType  = 'satellite';
  status: WashStatus;

  washId : string;
  private sub: any;

  constructor(private route: ActivatedRoute, private cleanerService : CleanerHttpClientService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.washId = params['washId']; // (+) converts string 'id' to a number
      // TODO fetch info for id here
      this.cleanerService.getCleanerRequestById(this.washId);
   });

    this.request = window.history.state.request;
    console.log(this.request);
    this.status = this.request.status;
    // this.route.params.subscribe(params => console.log(params));
  }
  closeWashDetails(){
    this.router.navigate(['/cleaner']);
  }
  save(request){
    console.log(this.status);
    console.log(this.request);
    this.request.status = this.status;
    this.cleanerService.putCleanerRequest(this.request).subscribe((res) => {
      console.log(res);
      this.closeWashDetails();
    });
  }
}
