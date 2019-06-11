import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SignupserviceService} from '../signupservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = new User('','','','','','','');

  constructor(private _signupservice : SignupserviceService) { }

  ngOnInit() {
  }

  topics = ['Angular','Node','React']

  onSubmit(){
    this._signupservice.signup(this.userModel)
    .subscribe(
      data => console.log('Success!',data),
      error => console.log('Error!',error)
    )
  }
}
