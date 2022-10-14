import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { BeatListitemComponent } from './components/beat-listitem/beat-listitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPipe } from './pipes/list.pipe';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BeatListitemComponent,
    ListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
