import { Component,OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update-movie-booking',
  templateUrl: './update-movie-booking.component.html',
  styleUrls: ['./update-movie-booking.component.css']
})
export class UpdateMovieBookingComponent implements OnInit {

  bookingform!:FormGroup ;

  constructor(private formBuilder :FormBuilder,private http:HttpClient){

  }

  ngOnInit(): void {
      this.bookingform=this.formBuilder.group({
        name:['',Validators.required],
        movie:[ new FormGroup({
          movieName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s\-\_\(\)\[\]\{\}\.\!\?\']{1,100}$/)])
        })],
        date :['',Validators.required],
        tickets:['' ,Validators.required,Validators.max(20)]

      });


  }



  onSubmit(){
    if (this.bookingform.invalid){
      return;
    }
  
    this.http.post('', this.bookingform.value).subscribe(
      response => {
        console.log(response);
        this.bookingform.reset();
      },
      error => {
        console.log(error);
      }
    );
  }
}
