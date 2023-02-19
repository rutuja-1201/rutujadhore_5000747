import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieBookingComponent } from './delete-movie-booking.component';

describe('DeleteMovieBookingComponent', () => {
  let component: DeleteMovieBookingComponent;
  let fixture: ComponentFixture<DeleteMovieBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMovieBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMovieBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
