import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../loginuser';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';

@Component({
  selector: 'app-logincontroller',
  templateUrl: './logincontroller.component.html',
  styleUrls: ['./logincontroller.component.scss']
})
export class LogincontrollerComponent implements OnInit {
  userModel = new LoginUser('','');
  flag = true ;
  user : User[];
  constructor(private _loginservice : LoginserviceService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this._loginservice.getAll().subscribe(
      (res: User[]) => {
        this.user = res;
      },
      (err) => console.log('erooor')
    );
  }
  
  onSubmit(){
     this._loginservice.login(this.userModel)
    .subscribe(
      (res : User[]) => {
        this.user =  res;
      }, 
      error => console.log('Error!',error)
    )
    
    }
    

}
