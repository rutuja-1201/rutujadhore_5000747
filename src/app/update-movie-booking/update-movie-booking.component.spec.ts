import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMovieBookingComponent } from './update-movie-booking.component';

describe('UpdateMovieBookingComponent', () => {
  let component: UpdateMovieBookingComponent;
  let fixture: ComponentFixture<UpdateMovieBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMovieBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMovieBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
