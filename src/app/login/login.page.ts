import { Component, OnInit ,ElementRef} from '@angular/core';
import { FormControl, FormGroupDirective,FormGroup, NgForm, Validators } from '@angular/forms';
import {NavController, MenuController,AlertController} from '@ionic/angular';
import {RegisterPage} from '../register/register.page';
import { present } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  UserDetails={passWord:'',userName:''};

 

  constructor(private navcntrl:NavController,private Eleref:ElementRef,private alert:AlertController) { 

  }

  ngOnInit() {
 this.loginForm = new FormGroup({
   userName :new FormControl("",[]),
   passWord:new FormControl("",[])
   });
  }

  async presentAlert() {
    const alert = await this.alert.create({
    message: 'Please enter valid username and password',
    subHeader: 'Invalid inputs',
    buttons: ['Dismiss']
   });
   await alert.present(); 
}
  ngAfterViewInit(){
    const cred = this.Eleref.nativeElement.querySelector("#credentials");
   // const alert =this.Eleref.nativeElement.querySelector('#ion-alert-controller');
    this.Eleref.nativeElement.querySelector("#login_button").addEventListener('click',()=>{
      console.log("login clciked");
      const login = this.Eleref.nativeElement.querySelector("#username").value;
      const register = this.Eleref.nativeElement.querySelector('#pass').value;
      console.log(login,register);
      if(login.trim().length<=0 || login<=0 && register.trim().length <=0|| register<= 0 ){
      this.presentAlert();
        return ;
      }
    else{
      console.log('login value',login,register);
      const data = document.createElement('ion-item');
      data.innerHTML = `login  username is ${login} and ${register}`;
      cred.appendChild(data);
      setTimeout(()=>{
        this.navcntrl.navigateForward('tabs')
      },2000)
    }
  });

  };
 

  submitForm(){
    console.log("values",this.loginForm.value)
  }

  register(){
    this.navcntrl.navigateForward("register")
  }

 
}