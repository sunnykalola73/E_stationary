import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginUser } from './loginuser';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  baseUrl = 'http://localhost:8012/AlphaOne';
  luser: User[];
    constructor(public http : HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  /*
  login(user : LoginUser): Observable<User[]> {
    return this.http.post(`${this.baseUrl}/login.php`, user).pipe(
      map((res :any ) => {
        this.luser = res['data.'];
        return this.luser;
    }),
    catchError(this.handleError));
  }
*/
  getAll(): Observable<User[]> {
  return this.http.get(`${this.baseUrl}/list1.php`).pipe(
    map((res) => {
      this.luser = res['data'];
      console.log(this.luser);
      return this.luser;
  }),
  catchError(this.handleError));
  }
  login(car:LoginUser): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/login1.php`,{params:{uid:car.uname,pwd:car.pwd}}).pipe(
      map((res) => {
        this.luser = res['data'];
        console.log(this.luser);
        return this.luser;
    }),
    catchError(this.handleError));
  }  
 /* login(car: LoginUser): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/login1.php`, { params : {uid :car.uname,pwd : car.pwd} })
      .pipe(map((res) => {
        this.luser.push(res['data']);
        return this.luser;
      }),
      catchError(this.handleError));
}*/
}
