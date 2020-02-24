import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class DisplayDataService{
    getDisplayingData(){
        return DisplayData;
    }
    
}
const DisplayData=[{
    id: 1,
    name:'Himanshu',
    address:'Delhi'
},
{
    id: 2,
    name:'Rahul',
    address:'Noida'
},
{
    id: 3,
    name:'Ravi',
    address:'Noida'
},
{
    id: 4,
    name:'Sachin',
    address:'Sonipat'
},
{
    id: 5,
    name:'Mohit',
    address:'Gurgaon'
},
{
    id: 6,
    name:'Ajay',
    address:'Delhi'
}

]