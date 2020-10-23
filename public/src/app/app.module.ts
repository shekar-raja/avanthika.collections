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
import { HttpClientModule }        from "@angular/common/http";

import { AppComponent }                               from './app.component';
import { AdminComponent }                             from './admin/admin.component';
import { AdminService } from "./admin/admin.service";

@NgModule({
  declarations: [	
    AppComponent,
    AdminComponent
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
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
