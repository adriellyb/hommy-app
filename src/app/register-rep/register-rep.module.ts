import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterRepPageRoutingModule } from './register-rep-routing.module';

import { RegisterRepPage } from './register-rep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterRepPageRoutingModule
  ],
  declarations: [RegisterRepPage]
})
export class RegisterRepPageModule {}
