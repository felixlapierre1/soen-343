import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminRequestListComponent } from './pages/admin-request-list/admin-request-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminListItemComponent } from './components/admin-list-item/admin-list-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AssignWashDialogComponent } from './components/assign-wash-dialog/assign-wash-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AdminRequestListComponent, AdminListItemComponent, AssignWashDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule
  ], entryComponents: [AssignWashDialogComponent],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
}]
})
export class AdminModule { }
