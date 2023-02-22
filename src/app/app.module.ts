import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { CustComponent } from './cust/cust.component';
import { SqrPipe } from './sqr.pipe';
import { DateserviceService } from './dateservice.service';




@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    CustComponent,
    SqrPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DateserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
