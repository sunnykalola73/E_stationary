import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

   baseUrl = 'http://localhost:8012/AlphaOne';
  constructor(private http : HttpClient  ) { }

 /* signup(user : User){
    return this._http.post<any>(this._url, user);
  }*/

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  
  signup(user: User) {
    console.log("Successfully inserted");
    return this.http.post(`${this.baseUrl}/signup.php`,  user );
  } 
}
