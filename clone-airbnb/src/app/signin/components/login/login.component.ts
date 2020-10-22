import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/users/users.service';
import { IUser } from 'src/app/shared/models/user.model';
import { IUserLoginResponse } from 'src/app/shared/models/userLoginResponse.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroupLogin: FormGroup;
  public userLogin: IUserLoginResponse;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formLoginInit();
  }

  private formLoginInit(): void{
    this.formGroupLogin = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  public login(): void {
    const data: IUser = this.formGroupLogin.value;
    this.userService.login(data).subscribe(
      response => {
        this.userLogin = response;
        if (response.status === 1 ) {
          console.log('Usuario autenticado')
          localStorage.setItem('Token', response.token);
          this.router.navigate(['/home']);
        } 
        console.log('Informacion del login', response);
      }
    )
  }


}
