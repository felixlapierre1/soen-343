import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = [{ value: 'cleaner', viewValue: 'Cleaner' },
  { value: 'client', viewValue: 'Client' },
  { value: 'admin', viewValue: 'Admin' }]
  constructor() { }

  ngOnInit() {
  }
  redirect(userType: string) {
    console.log(userType);

  }
}
