import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { apiModel } from '../apiModel';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Data, ParamMap } from '@angular/router';
import { isLoweredSymbol } from '@angular/compiler';


@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {
  allData: apiModel[];
  selected: any;
  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
     this.selected = +params.get('id');
    });
    
    this.dataService.getData()
    .subscribe ((res) =>{
      console.log(res);
      this.FindPhoto(res);
    })    
   
    
    
    
  };

  private FindPhoto(dataArr: Array<any>)
  {

    for (let i = 0; i < dataArr.length;  i++)
    {
      if (dataArr[i].id === this.selected){
        console.log(dataArr[i].title);
      }
      //console.log(dataArr[i].id);
    }
  }
  
}
