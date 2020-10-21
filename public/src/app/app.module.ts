import { BrowserModule }                              from '@angular/platform-browser';
import { NgModule }                                   from '@angular/core';
import { AppRoutingModule }                           from "../app/app-routing.routing";
import { LocationStrategy, PathLocationStrategy }     from '@angular/common';

import { AppComponent }                               from './app.component';
import { AdminComponent }                             from './admin/admin.component';

@NgModule({
  declarations: [	
    AppComponent,
    AdminComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
