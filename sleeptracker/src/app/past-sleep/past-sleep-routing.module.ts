import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastSleepPage } from './past-sleep.page';

const routes: Routes = [
  {
    path: '',
    component: PastSleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastSleepPageRoutingModule {}
