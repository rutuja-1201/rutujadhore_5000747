import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddBookingComponent } from './add-movie-booking/add-movie-booking.component';
import { UpdateMovieBookingComponent } from './update-movie-booking/update-movie-booking.component';
import { DeleteMovieBookingComponent } from './delete-movie-booking/delete-movie-booking.component';
import { ListAllBookingsComponent } from './list-all-bookings/list-all-bookings.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddBookingComponent,
    UpdateMovieBookingComponent,
    DeleteMovieBookingComponent,
    ListAllBookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
