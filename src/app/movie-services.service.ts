import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServicesService {
  
  constructor(private http:HttpClient){
    
  }
  data=[{
    'movieId' :1,
    'movieName':'Jersey',
    'movieBookingdate':'2023-01-12',
    'noOfTickets':2,
    'totalAmount':50
  },
  {
    'movieId' :2,
    'movieName':'Bahubali',
    'movieBookingdate':'2023-02-28',
    'noOfTickets':4,
    'totalAmount':50
  }]
  ;
}
