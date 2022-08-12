import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepinessLoggerPage } from './sleepiness-logger.page';

const routes: Routes = [
  {
    path: '',
    component: SleepinessLoggerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepinessLoggerPageRoutingModule {}
