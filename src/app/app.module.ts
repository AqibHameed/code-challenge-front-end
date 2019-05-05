import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DsListService } from  './app.service';  
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
