import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterRepPage } from './register-rep.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterRepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRepPageRoutingModule {}
