import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { BookingService } from 'src/app/services/booking/booking.service';
import { IBooking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent implements OnInit {

  public formGroupBooking: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService
    ) { }

  ngOnInit(): void {
    this.formBookingInit();
  }

  private formBookingInit():void {
    this.formGroupBooking = this.formBuilder.group({
      booking_date_start: ['', [Validators.required, this.validateDate]],
      booking_date_end: ['', [Validators.required, this.validateDate]],
      comments: ['', Validators.required]
    });
  }

  public validateDate(control: AbstractControl){
  
    const date = control.value;
    const dateNow = new Date();
    let errors = null;
    let caracter = '-';
    let arrayDate = date.split(caracter);

    if(parseInt(arrayDate[0]) <= dateNow.getFullYear() &&
        parseInt(arrayDate[1]) <= (dateNow.getMonth() + 1) &&
        parseInt(arrayDate[2]) < dateNow.getDate()) {
        errors = { dateError: 'La fecha debe ser mayor o igual a la fecha actual'};
    }

    return errors;
  }

  public getError (controlName: string) {
    let error = '';
    const control = this.formGroupBooking.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.errorMapping(control.errors)
    }
    return error;
  }

  private errorMapping (errors: any) {
    console.log('errors', errors)
    let errorMessage = '';

    if(errors.required) {
      errorMessage += 'Campo requerido. ';
    }

    if(errors.dateError){
      errorMessage += errors.dateError;
    }
    return errorMessage;
  }

  public bookingNow(): void {
    const data: IBooking = this.formGroupBooking.value;
    data.experience_id = localStorage.getItem("experiences_id");
    this.bookingService.postBooking(data).subscribe(
       response => {
         if(response.status === 1){
            alert('Reserva exitosa');
            console.log('reserva exitosa', response);
         }else{
           alert('token no valido');
         }
       }
     );
  }


}
