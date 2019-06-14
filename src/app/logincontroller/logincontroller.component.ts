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
  userM = new LoginUser('','');
  flag = true ;
  user : User[];
  luser : User[];
  constructor(private _loginservice : LoginserviceService) { }

  ngOnInit() {
    this.getCars();
    this.onSubmit();
  }

  getCars(): void {
    this._loginservice.getAll().subscribe(
      (res: User[]) => {
        this.user = res;
        console.log(this.user);
      },
      (err) => console.log('erooor')
    );
  }
  
  onSubmit(){
     this._loginservice.login(this.userM)
    .subscribe(
      (res : any) => {
        this.luser =  res;
      }, 
      error => console.log('Error!',error)
    )
    
    }
    

}
