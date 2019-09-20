import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { EditDataComponent } from './edit-data/edit-data.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { RouterModule, Routes } from '@angular/router';
import { ViewMoreComponent } from './view-more/view-more.component';
import { ViewmoreDetailComponent } from './viewmore-detail/viewmore-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditDataComponent,
    ViewMoreComponent,
    ViewmoreDetailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
