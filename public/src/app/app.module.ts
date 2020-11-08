import { BrowserModule }                              from '@angular/platform-browser';
import { NgModule }                                   from '@angular/core';
import { AppRoutingModule }                           from "../app/app-routing.routing";
import { ReactiveFormsModule, FormsModule }           from '@angular/forms';
import { MatFormFieldModule }                         from '@angular/material/form-field';
import { LocationStrategy, PathLocationStrategy }     from '@angular/common';
import { BrowserAnimationsModule }                    from '@angular/platform-browser/animations';
import { MatInputModule }                             from '@angular/material/input';
import { MatCardModule }                              from '@angular/material/card';
import { MatButtonModule }                            from '@angular/material/button';
import { HttpClientModule }                           from "@angular/common/http";
import { MatToolbarModule }                           from '@angular/material/toolbar';
import { MatDialogModule }                            from '@angular/material/dialog';
import { MatSelectModule }                              from '@angular/material/select';

import { AppComponent }                               from './app.component';
import { AdminComponent }                             from './admin/admin.component';
import { AdminService }                               from "./admin/admin.service";
import { AdminPageComponent }                         from './admin-page/admin-page.component';
import { AdminHeaderComponent }                       from './admin-header/admin-header.component';
import { UploadProductComponent }                     from './upload-product/upload-product.component';
import { EditProductComponent }                       from './edit-product/edit-product.component';
import { OrdersComponent }                            from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [							
    AppComponent,
    AdminComponent,
      AdminPageComponent,
      AdminHeaderComponent,
      UploadProductComponent,
      EditProductComponent,
      OrdersComponent,
      ProductsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
