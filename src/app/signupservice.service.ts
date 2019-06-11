import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

   _url = ''; 
  constructor(private _http : HttpClient  ) { }

  signup(user : User){
    return this._http.post<any>(this._url, user);
  }
}
