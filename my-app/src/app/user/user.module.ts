import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserAddressComponent } from './user-address/user-address.component';


@NgModule({
  declarations: [
    UserOverviewComponent,
    UserAddressComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
