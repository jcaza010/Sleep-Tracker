import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentSleepinessPageRoutingModule } from './current-sleepiness-routing.module';

import { CurrentSleepinessPage } from './current-sleepiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentSleepinessPageRoutingModule
  ],
  declarations: [CurrentSleepinessPage]
})
export class CurrentSleepinessPageModule {}
