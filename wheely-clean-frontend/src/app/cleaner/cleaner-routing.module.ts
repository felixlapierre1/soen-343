import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CleanerComponent } from './cleaner/cleaner.component';



const routes: Routes = [
    { path: 'cleaner', component: CleanerComponent }
  ];
@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CleanerRoutingModule { }
