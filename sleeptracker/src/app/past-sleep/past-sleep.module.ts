import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastSleepPageRoutingModule } from './past-sleep-routing.module';

import { PastSleepPage } from './past-sleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastSleepPageRoutingModule
  ],
  declarations: [PastSleepPage]
})
export class PastSleepPageModule {}
