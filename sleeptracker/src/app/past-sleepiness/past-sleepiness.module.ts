import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastSleepinessPageRoutingModule } from './past-sleepiness-routing.module';

import { PastSleepinessPage } from './past-sleepiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastSleepinessPageRoutingModule
  ],
  declarations: [PastSleepinessPage]
})
export class PastSleepinessPageModule {}
