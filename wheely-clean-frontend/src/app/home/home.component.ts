import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users = [{ value: 'cleaner', viewValue: 'Cleaner' },
  { value: 'customer', viewValue: 'Customer' },
  { value: 'admin', viewValue: 'Admin' }];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirect(userType: string) {
    if (userType === 'customer') {
      this.router.navigate(['/customer']);
    }
    if (userType === 'cleaner') {
      this.router.navigate(['/cleaner']);
    }
    if (userType === 'admin') {
      this.router.navigate(['/admin']);
    }
  }
}
