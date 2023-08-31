import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QrCodeModule } from 'ng-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BeatListitemComponent } from './components/beat-listitem/beat-listitem.component';
import { BeatSelectorComponent } from './components/beat-selector/beat-selector.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ShowcaseTrackComponent } from './components/showcase-track/showcase-track.component';
import { ListPipe } from './pipes/list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeatSelectorComponent,
    BeatListitemComponent,
    ListPipe,
    FooterComponent,
    ImprintComponent,
    PrivacyComponent,
    AboutComponent,
    ShowcaseTrackComponent,
    HomeComponent,
    MainViewComponent,
    GreeterComponent
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
