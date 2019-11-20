import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanerRoutingModule } from './cleaner-routing.module';
import { CleanerRequestListComponent } from './pages/cleaner-request-list/cleaner-request-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CustomerModule } from '../customer/customer.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CleanerRequestDetailsComponent } from './pages/cleaner-request-details/cleaner-request-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AgmCoreModule } from '@agm/core';
import { APIKey } from '../../env.js';



@NgModule({
  declarations: [CleanerRequestListComponent, CleanerRequestDetailsComponent],
  imports: [
    CommonModule,
    CleanerRoutingModule,
    MatButtonModule,
    CustomerModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: APIKey

    })
  ],
  exports: []

})
export class CleanerModule { }
