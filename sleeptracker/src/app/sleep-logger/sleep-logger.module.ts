import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepLoggerPageRoutingModule } from './sleep-logger-routing.module';

import { SleepLoggerPage } from './sleep-logger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepLoggerPageRoutingModule
  ],
  declarations: [SleepLoggerPage]
})
export class SleepLoggerPageModule {}
