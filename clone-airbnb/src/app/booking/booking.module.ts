import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBookingComponent } from './components/form-booking/form-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking.component';



@NgModule({
  declarations: [FormBookingComponent, BookingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
