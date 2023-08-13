import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BeatSelectorComponent } from './components/beat-selector/beat-selector.component';
import { BeatListitemComponent } from './components/beat-listitem/beat-listitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPipe } from './pipes/list.pipe';
import { QrCodeModule } from 'ng-qrcode';
import { FooterComponent } from './components/footer/footer.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AboutComponent } from './components/about/about.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { ShowcaseTrackComponent } from './components/showcase-track/showcase-track.component';
import { HomeComponent } from './components/home/home.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { GreeterComponent } from './components/greeter/greeter.component';

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
    InfoPageComponent,
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
