import { Component } from '@angular/core';
import {NavController, MenuController,} from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navControl:NavController) {}
ngOnInit(){

}

goBack(){
  this.navControl.navigateBack("tabs/tab1");
}
}
