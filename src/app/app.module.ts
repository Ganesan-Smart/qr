import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {FormsModule} from '@angular/forms';
import { ReponsepageComponent } from './reponsepage/reponsepage.component';
import { QrComponent } from './reponsepage/qr/qr.component';
import { HostnameService } from './hostname.service';
import { WINDOW_PROVIDERS } from './window.providers';
@NgModule({
  declarations: [
    AppComponent,
    ReponsepageComponent,
    QrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    FormsModule
  ],
  providers: [HostnameService,WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
