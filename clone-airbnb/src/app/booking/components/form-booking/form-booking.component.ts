import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private bookingService: BookingService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formBookingInit();
  }

  private formBookingInit():void {
    this.formGroupBooking = this.formBuilder.group({
      booking_date_start: ['', [Validators.required, this.validateDate]],
      booking_date_end: ['', [Validators.required, this.validateDateEnd]],
      comments: ['', Validators.required]
    });
  }

  public validateDate(control: AbstractControl){
  
    const date = control.value;
    localStorage.setItem('dateStart', date);
    const dateNow = new Date();
    let errors = null;
    let arrayDate = date.split('-');

    if(parseInt(arrayDate[0]) < dateNow.getFullYear()){
      errors = { dateStartError: 'El año debe ser mayor o igual al año actual'};
    }else if(parseInt(arrayDate[0]) === dateNow.getFullYear() && parseInt(arrayDate[1]) < (dateNow.getMonth() + 1)) {
      errors = { dateStartError: 'El mes debe ser mayor o igual al mes actual'};
    }else if(parseInt(arrayDate[0]) === dateNow.getFullYear() && parseInt(arrayDate[1]) === (dateNow.getMonth() + 1) && parseInt(arrayDate[2]) < dateNow.getDate()){
      errors = { dateStartError: 'El dia debe ser mayor o igual al dia actual'};
    }

    return errors;
  }

  public validateDateEnd(control: AbstractControl){
    let dateEnd = control.value;
    let dateStar = localStorage.getItem('dateStart');
    let errors = null;
    let arrayDateStart = dateStar.split('-');
    let arrayDateEnd = dateEnd.split('-');

    console.log('fecha inicio', arrayDateStart)
    console.log('fecha final', arrayDateEnd)

    if(parseInt(arrayDateEnd[0]) < parseInt(arrayDateStart[0])){
      errors = { dateStartError: 'El año debe ser mayor o igual al año inicio'};
    }else if(parseInt(arrayDateEnd[0]) === parseInt(arrayDateStart[0]) && parseInt(arrayDateEnd[1]) < parseInt(arrayDateStart[1])) {
      errors = { dateStartError: 'El mes debe ser mayor o igual al mes inicio'};
    }else if(parseInt(arrayDateEnd[0]) === parseInt(arrayDateStart[0]) && parseInt(arrayDateEnd[1]) === parseInt(arrayDateStart[1]) && parseInt(arrayDateEnd[2]) < parseInt(arrayDateStart[2])){
      errors = { dateStartError: 'El dia debe ser mayor o igual al dia inicio'};
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

    if(errors.dateStartError){
      errorMessage += errors.dateStartError;
    }

    if(errors.dateEndError){
      errorMessage += errors.dateEndError;
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
            this.router.navigate(['/home']);
         }else{
           alert('token no valido');
         }
       }
     );
  }


}
