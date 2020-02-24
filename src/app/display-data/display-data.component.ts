import { Component, OnInit } from '@angular/core';
import { DisplayDataService } from '../shared/displaydata.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  allData ;

  constructor(private displayData:DisplayDataService) { }

  ngOnInit() {
   this.allData=this.displayData.getDisplayingData();
   
  }

}
