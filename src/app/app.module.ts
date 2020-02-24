import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SubAppComponent } from './sub-app/sub-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { ExpressionsComponent } from './expressions/expressions.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    SubAppComponent,
    NavbarComponent,
    DisplayDataComponent,
    HomeComponent,
    ExpressionsComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,
 RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
