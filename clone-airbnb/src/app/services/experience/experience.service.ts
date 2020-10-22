import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { IExperiencesTopFiveResponse } from 'src/app/shared/models/experiencesTopFiveResponse.model';
import { IExperiencesResponse } from 'src/app/shared/models/experiencesResponse.model';
import { IExperiencesDetailResponse } from 'src/app/shared/models/experiencesDetailResponse.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private urlAPI: string = environment.urlBase;
  
  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse){
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`);
  }

  public getExperience(): Observable<IExperiencesResponse> {
    const url = `${this.urlAPI}/experiences`;
    return this.httpClient.get<IExperiencesResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceTop5(): Observable<IExperiencesTopFiveResponse> {
    const url = `${this.urlAPI}/experiences/top5`;
    return this.httpClient.get<IExperiencesTopFiveResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceById(id: string): Observable<IExperiencesDetailResponse> {
    const url = `${this.urlAPI}/experiences/detail/${id}`;
    return this.httpClient.get<IExperiencesDetailResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
}
