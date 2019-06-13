import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { item } from './item';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddcartserviceService {
  baseUrl = 'http://localhost:8012/AlphaOne';
  items : item[];
  constructor(private http : HttpClient  ) { }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

 /* store(it : item): Observable<item[]> {
    return this.http.post(`${this.baseUrl}/addcart.php`, { data: it })
      .pipe(map((res) => {
        this.items.push(res['data']);
        return this.items;
      }),
      catchError(this.handleError));
  }*/

  
  store(user: item) {
    console.log("Successfully inserted");
    return this.http.post(`${this.baseUrl}/addcart.php`,  user );
  } 
}
