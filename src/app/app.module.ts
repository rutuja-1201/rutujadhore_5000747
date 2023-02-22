import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListempComponent } from './listemp/listemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { EserviceService } from './eservice.service';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ListempComponent,
    AddempComponent,
    UpdateComponent,

     
  ],
  imports: [FormsModule,ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [HttpClient,EserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
