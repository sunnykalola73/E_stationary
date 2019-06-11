import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginUser } from './loginuser';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

   baseUrl = 'http://localhost:8012/AlphaOne';
  constructor(private http : HttpClient  ) { }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  
  login(user: LoginUser) {
    
    return this.http.post(`${this.baseUrl}/login.php`,  user );
    console.log("Successfully inserted");
  } 
}
