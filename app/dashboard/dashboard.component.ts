import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { apiModel } from '../apiModel';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  allData: apiModel[];
  constructor(private dataService: DataService, 
              private router: Router) { }
  
  ngOnInit() {

  }
  // fetching data from data service
  showData(): void{
    this.dataService.getData().subscribe
    ({
      next: data =>

      this.allData = data,
      
    });
  }

  // navigation using :id
    onClick(id){
    this.router.navigate(['/dashboard/view', id])
  }
  

}
