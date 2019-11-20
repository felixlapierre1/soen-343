import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CleanerRequestListComponent } from './pages/cleaner-request-list/cleaner-request-list.component';
import { CleanerRequestDetailsComponent } from './pages/cleaner-request-details/cleaner-request-details.component';



const routes: Routes = [
    { path: 'cleaner', component: CleanerRequestListComponent },
    { path: 'cleaner/wash-details', component: CleanerRequestDetailsComponent}
    // { path: 'cleaner/wash-details/:id', component: CleanerRequestDetailsComponent}

  ];
@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CleanerRoutingModule { }
