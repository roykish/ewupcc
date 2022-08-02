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
import{ RouterModule, Routes } from '@angular/router';
import { MembersPageComponent } from './members-page/members-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { CurrentCommitteePageComponent } from './members-page/current-committee-page/current-committee-page.component';
import { GeneralMembersPageComponent } from './members-page/general-members-page/general-members-page.component';
import { AlumniPageComponent } from './members-page/alumni-page/alumni-page.component';




const appRoutes : Routes = [
  {path: '', component: HomePageContentComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'about-us', component: AboutUsPageComponent},
  {path: 'members', component: MembersPageComponent,
    children:
      [
        {path: 'current-committe', component: CurrentCommitteePageComponent},
        {path: 'general-members', component: GeneralMembersPageComponent},
        {path: 'alumni', component: AlumniPageComponent}
      ]

  },
  {path: 'donate', component: DonatePageComponent},

]


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
