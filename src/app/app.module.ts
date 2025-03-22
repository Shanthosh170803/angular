import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { ReadcustomerComponent } from './readcustomer/readcustomer.component';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CreatecustomerComponent,
    HomeComponent,
    UpdatecustomerComponent,
    ReadcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
