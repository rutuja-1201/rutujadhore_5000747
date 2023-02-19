import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './add-movie-booking/add-movie-booking.component';
import { DeleteMovieBookingComponent } from './delete-movie-booking/delete-movie-booking.component';
import { UpdateMovieBookingComponent } from './update-movie-booking/update-movie-booking.component';
import { ListAllBookingsComponent } from './list-all-bookings/list-all-bookings.component';


const routes: Routes = [
{path :'app-add-movie-booking' ,component :AddBookingComponent},
{path : 'app-list-all-bookings',component:ListAllBookingsComponent},
{path :'app-delete-movie-booking',component:DeleteMovieBookingComponent},
{path :'app-update-movie-booking',component:UpdateMovieBookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
