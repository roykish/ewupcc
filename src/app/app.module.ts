import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageContentComponent } from './home-page/home-page-content/home-page-content.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

import { MembersPageComponent } from './members-page/members-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { CurrentCommitteePageComponent } from './members-page/current-committee-page/current-committee-page.component';
import { GeneralMembersPageComponent } from './members-page/general-members-page/general-members-page.component';
import { AlumniPageComponent } from './members-page/alumni-page/alumni-page.component';
import { ImageDetailsComponent } from './gallery-page/image-details/image-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HomePageContentComponent,
    GalleryPageComponent,
    MembersPageComponent,
    DonatePageComponent,
    CurrentCommitteePageComponent,
    GeneralMembersPageComponent,
    AlumniPageComponent,
    AboutUsPageComponent,
    ImageDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
