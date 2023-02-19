import { Component } from '@angular/core';
import { MovieServicesService } from '../movie-services.service';
@Component({
  selector: 'app-delete-movie-booking',
  templateUrl: './delete-movie-booking.component.html',
  styleUrls: ['./delete-movie-booking.component.css']
})
export class DeleteMovieBookingComponent {
  MovieServicesService: any;
  bookings: any;
  deleteBooking(id: number): void {
    this.MovieServicesService.deleteBooking(id);
    this.bookings = this.MovieServicesService.data();
  }
}
