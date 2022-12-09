import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/dashboard/layout/header/header.component';
import { FooterComponent } from './components/dashboard/layout/footer/footer.component';
import { AsideComponent } from './components/dashboard/layout/aside/aside.component';
import { HomeComponent } from './components/pages/home/home.component';

import { DashboardModule } from './components/pages/dashboard.module';
import { HttpClientModule } from '@angular/common/http';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { list } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';

import { CoursesModule } from './components/pages/course/courses.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,


  ],
  imports: [


BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
     DashboardModule,
    HttpClientModule,
    AccordionModule,
    CoursesModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
