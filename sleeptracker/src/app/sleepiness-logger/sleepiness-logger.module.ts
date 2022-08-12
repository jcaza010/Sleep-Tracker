import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepinessLoggerPageRoutingModule } from './sleepiness-logger-routing.module';

import { SleepinessLoggerPage } from './sleepiness-logger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepinessLoggerPageRoutingModule
  ],
  declarations: [SleepinessLoggerPage]
})
export class SleepinessLoggerPageModule {}
