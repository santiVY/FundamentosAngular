import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { IUser } from 'src/app/shared/models/user.model';
import { IUserLoginResponse } from 'src/app/shared/models/userLoginResponse.model';
import { IUserRegisterResponse } from 'src/app/shared/models/userRegisterResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI: string = environment.urlBase;
  
  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse){
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`);
  }

  public addUser(user: IUser): Observable<IUserRegisterResponse> {
    const url = `${this.urlAPI}/users/signup`;
    return this.httpClient.post<IUserRegisterResponse>(url, user).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public login(user: IUser): Observable<IUserLoginResponse> {
    const url = `${this.urlAPI}/users/login`;
    return this.httpClient.post<IUserLoginResponse>(url, user).pipe(
      retry(2), catchError(this.handlerError)
    );
  }


}
