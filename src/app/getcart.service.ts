import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { item } from './item';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetcartService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8012/AlphaOne/';
  items : item[];

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  
  getAll(): Observable<item[]> {
    return this.http.get(`${this.baseUrl}/getcart.php`).pipe(
      map((res) => {
        this.items = res['data'];
        return this.items;
    }),
    catchError(this.handleError));
  }

  delete(id: number): Observable<item[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete.php`, { params: params })
      .pipe(map(res => {
        const filteredCars = this.items.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.items = filteredCars;
      }),
      catchError(this.handleError));
}
}

