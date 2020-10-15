import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent implements OnInit {

  public formGroupBooking: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formBookingInit();
  }

  private formBookingInit():void {
    this.formGroupBooking = this.formBuilder.group({
      date: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public booking(): void {
    const data = this.formGroupBooking.value;
    console.log('Informacion de reserva ', data);
  }


}
