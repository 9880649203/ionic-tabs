import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator} from '@angular/forms';
import {NavController, MenuController,} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm:FormGroup;
  regsterDetails={
    username:"",
    password:"",
    repeatPass:""
  }
  constructor(private navContrl:NavController) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username:new FormControl("",[]),
      password:new FormControl("",[]),
      repeatPass:new FormControl("",[]),
    })
  }
    login(){
      this.navContrl.navigateBack('login');
    }

    register(){
      if(!this.registerForm.valid){
        alert("please fill all fields");
      }
      else{
        this.navContrl.navigateRoot("");
      }
     
    }
}
