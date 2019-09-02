import { Component, OnInit } from '@angular/core';
import {NavController, MenuController,} from '@ionic/angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private navcntrl:NavController) { }
  ngOnInit() {}

  lagOut(){
   this.navcntrl.navigateRoot('');
  }
}
