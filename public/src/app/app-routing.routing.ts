import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent }       from "../app/admin/admin.component";
import { RouteGuard }           from "./middlewares/route.guard";
import { AdminPageComponent }   from "../app/admin-page/admin-page.component";
import { UploadProductComponent } from "../app/upload-product/upload-product.component";
import { EditProductComponent } from "../app/edit-product/edit-product.component";
import { OrdersComponent } from "../app/orders/orders.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'adminpage',
    component: AdminPageComponent,
    canActivate: [RouteGuard]
  },
  {
    path: 'adminpage/uploadproduct',
    component: UploadProductComponent,
    canActivate: [RouteGuard]
  },
  {
    path: 'adminpage/editproduct/:id',
    component: EditProductComponent,
    canActivate: [RouteGuard]
  },
  {
    path: 'adminpage/orders',
    component: OrdersComponent,
    canActivate: [RouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }