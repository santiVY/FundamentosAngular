import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './signin.component';



@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
