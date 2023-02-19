import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieServicesService } from '../movie-services.service';
import {Movie} from '../movie'
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-all-bookings',
  templateUrl: './list-all-bookings.component.html',
  styleUrls: ['./list-all-bookings.component.css']
})
export class ListAllBookingsComponent implements OnInit {

movieslist!:Movie[];

constructor(private MovieServices :MovieServicesService,private router :Router){
       
  
 


}
  ngOnInit(): void {
    this.movieslist=this.MovieServices.data
    throw new Error('Method not implemented.');
  }



}
