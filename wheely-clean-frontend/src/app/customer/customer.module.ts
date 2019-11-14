import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule  ],
  exports: [CustomerComponent ]
})
export class CustomerModule { }
