import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { ActivatedRoute } from '@angular/router';
import { ViewmoreDetailComponent } from './viewmore-detail/viewmore-detail.component';

const routes: Routes = [
  { path: '', redirectTo: "/dashboard", pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/view/:id', component: ViewMoreComponent },
  

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
 
