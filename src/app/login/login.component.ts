import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginRef=new FormGroup({
  emailid:new FormControl(),
  password: new FormControl(),
  typeofuser: new FormControl()
})
  constructor(){}
  ngOnInit(): void {
      
  }
  signin():void{
    let login=this.loginRef.value;
    console.log(login);
  }
}
