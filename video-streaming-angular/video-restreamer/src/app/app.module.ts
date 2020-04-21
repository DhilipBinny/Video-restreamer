import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {HomeComponent2 } from './components/home2/home.component2';
import {MaterialModule} from './app.material.module';
import { TryUrlComponent } from './components/try-url/try-url.component';
import { DialogComponent } from './dialog/dialog.component';
// import {DialogOverviewExampleDialog} from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent2,
    TryUrlComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents:[DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
