import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerRequestListComponent } from './pages/customer-request-list/customer-request-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ListItemComponent } from './components/list-item/list-item.component';
import { DatetimePickerModule } from '@fundamental-ngx/core';
import { DatePickerModule } from '@fundamental-ngx/core';
import { TimePickerModule } from '@fundamental-ngx/core';

import { IconModule } from '@fundamental-ngx/core';
import { CustomerRequestCreateComponent } from './pages/customer-request-create/customer-request-create.component';

import { APIKey } from '../../env.js';

@NgModule({
  declarations: [CustomerRequestListComponent, ListItemComponent, CustomerRequestCreateComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    DatePickerModule,
    TimePickerModule,
    IconModule,
    DatetimePickerModule,
    AgmCoreModule.forRoot({
      apiKey: APIKey

    })],
  exports: [CustomerRequestListComponent, ListItemComponent]
})
export class CustomerModule { }
