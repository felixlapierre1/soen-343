import { Component, OnInit, Input } from '@angular/core';
import { WashRequest } from 'src/app/core/models/wash-request';
import { MatDialog } from '@angular/material/dialog';
import { AssignWashDialogComponent } from '../assign-wash-dialog/assign-wash-dialog.component';

@Component({
  selector: 'app-admin-list-item',
  templateUrl: './admin-list-item.component.html',
  styleUrls: ['./admin-list-item.component.scss']
})
export class AdminListItemComponent implements OnInit {

  @Input() request: WashRequest;
  color: string;
  icon: string;
  time: string;
  cleanerList = ['Thomas Gauvin', 'Lara Tran'];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.generateIconName();
    this.time = this.request.time.toTimeString().substring(0, 9);
  }

  generateIconName() {
    if (this.request.status === 'Accepted') {
      this.icon = 'thumb_up';
      this.color = 'pink';
    }
    if (this.request.status === 'Pending') {
      this.icon = 'access_time';
      this.color = 'grey';
    }
    if (this.request.status === 'En Route') {
      this.icon = 'directions_car';
      this.color = 'black';
    }
    if (this.request.status === 'In Progress') {
      this.icon = 'local_car_wash';
      this.color = 'blue';
    }
    if (this.request.status === 'Cancelled') {
      this.icon = 'cancel';
      this.color = 'red';
    }
    if (this.request.status === 'Completed') {
      this.icon = 'check_circle';
      this.color = 'green';
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(AssignWashDialogComponent, {
      width: '250px',
      data: {list: this.cleanerList}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

  }

}
