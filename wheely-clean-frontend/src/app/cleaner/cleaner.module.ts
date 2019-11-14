import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanerComponent } from './cleaner/cleaner.component';
import { CleanerRoutingModule } from './cleaner-routing.module';



@NgModule({
  declarations: [CleanerComponent],
  imports: [
    CommonModule,
    CleanerRoutingModule
  ],
  exports: [CleanerComponent ]

})
export class CleanerModule { }
