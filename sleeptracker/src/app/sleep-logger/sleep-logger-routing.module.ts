import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepLoggerPage } from './sleep-logger.page';

const routes: Routes = [
  {
    path: '',
    component: SleepLoggerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepLoggerPageRoutingModule {}
