import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-assign-wash-dialog',
  templateUrl: './assign-wash-dialog.component.html',
  styleUrls: ['./assign-wash-dialog.component.scss']
})
export class AssignWashDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<AssignWashDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  cleanerList: Array<string>;
  cleaner: string;
  ngOnInit() {
    this.cleanerList = this.data.list;
    this.cleaner = this.cleanerList[0];
  }
  close() {
    this.dialogRef.close();
  }
  submit() {
    this.dialogRef.close(this.cleaner);
  }

}
