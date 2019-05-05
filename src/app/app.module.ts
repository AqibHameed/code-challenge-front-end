import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DsListService } from  './upload_file.service';
import { GetAllAssets } from  './get_all_assets.service';   
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
  providers: [DsListService, GetAllAssets],
  bootstrap: [AppComponent]
})
export class AppModule { }
