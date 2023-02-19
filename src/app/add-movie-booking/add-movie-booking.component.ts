import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MovieServicesService } from '../movie-services.service';
import {Movie} from '../movie'

@Component({
  selector: 'app-add-movie-booking',
  templateUrl: './add-movie-booking.component.html',
  styleUrls: ['./add-movie-booking.component.css']
})
export class AddBookingComponent {
  movieForm =new FormGroup({
    movieId:new FormControl('',[Validators.required,Validators.pattern('^[1-9][0-9]{0,2}$')]),
    movieName :new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern('^[a-zA-Z0-9]*$')]),
    movieBookingdate :new FormControl('',Validators.required),
    noOfTickets :new FormControl('',[Validators.required,Validators.max(15)]),
    totalAmount :new FormControl('')
  });

constructor (private movieService: MovieServicesService){

}
/*
onSubmit():void {
  const movie :Movie =this.movieForm.value;
  movie.totalAmount =movie.noOfTickets*150;
  this.movieService.addBooking(movie);
  this.movieForm.reset();

}
*/

}
  

