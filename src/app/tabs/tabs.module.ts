import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import {SharedComponentsModule} from '../components/shared-components.module';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [TabsPage],
  exports:[SharedComponentsModule],
})
export class TabsPageModule {}
