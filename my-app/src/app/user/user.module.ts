import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserOverviewComponent,
    UserAddressComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
