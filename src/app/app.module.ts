import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './pages/test/test.component';
// import { HolidaysComponent } from './holidays/holidays.component';
// import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TestComponent,
    // HolidaysComponent,
    // NewComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, FormsModule, ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
