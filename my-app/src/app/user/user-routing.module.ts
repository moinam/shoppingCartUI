import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component: UserComponent,
    children: [
      {path: 'address', component: UserAddressComponent},
      {path: 'profile', component: UserOverviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
