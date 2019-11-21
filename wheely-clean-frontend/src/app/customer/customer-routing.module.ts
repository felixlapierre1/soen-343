import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRequestListComponent } from './pages/customer-request-list/customer-request-list.component';
import { CustomerRequestCreateComponent } from './pages/customer-request-create/customer-request-create.component';
import { CustomerWashDetailsComponent } from './pages/customer-wash-details/customer-wash-details.component';

const routes: Routes = [
    { path: 'customer', component: CustomerRequestListComponent },
    { path: 'customer/create-request', component: CustomerRequestCreateComponent },
    { path: 'customer/wash-details/:washId', component: CustomerWashDetailsComponent }
  ];
@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
