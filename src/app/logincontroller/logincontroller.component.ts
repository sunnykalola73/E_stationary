import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../loginuser';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-logincontroller',
  templateUrl: './logincontroller.component.html',
  styleUrls: ['./logincontroller.component.scss']
})
export class LogincontrollerComponent implements OnInit {
  userModel = new LoginUser('','');

  constructor(private _loginservice : LoginserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    let r=this._loginservice.login(this.userModel)
    .subscribe(
      data => console.log('Success!',data),
      error => console.log('Error!',error)
    )
    console.log(r);
  }
}
