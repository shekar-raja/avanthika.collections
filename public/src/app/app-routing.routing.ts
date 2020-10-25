import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent }       from "../app/admin/admin.component";
import { RouteGuard }           from "./middlewares/route.guard";
import { AdminPageComponent }   from "../app/admin-page/admin-page.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'adminpage',
    component: AdminPageComponent,
    canActivate: [RouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }