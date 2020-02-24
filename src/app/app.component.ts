import { Component } from '@angular/core';
import { DisplayDataService } from './shared/displaydata.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularPapp';
  constructor(){
  }
}
