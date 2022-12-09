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
import { FooterComponent } from './components/footer/footer.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { BeatselectorComponent } from './components/beatselector/beatselector.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BeatListitemComponent,
    ListPipe,
    FooterComponent,
    ImprintComponent,
    PrivacyComponent,
    BeatselectorComponent,
    AboutComponent
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
