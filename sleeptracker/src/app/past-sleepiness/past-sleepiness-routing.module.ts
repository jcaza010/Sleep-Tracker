import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastSleepinessPage } from './past-sleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: PastSleepinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastSleepinessPageRoutingModule {}
