import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ExpressionsComponent } from './expressions/expressions.component';

export const appRoutes :Routes =[
    {path : 'home', component:HomeComponent},
    {path:'infodisplay',component:DisplayDataComponent},
    {path:'expressions', component:ExpressionsComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},

]