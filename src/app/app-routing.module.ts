import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomePageContentComponent } from './home-page/home-page-content/home-page-content.component';
import { AlumniPageComponent } from './members-page/alumni-page/alumni-page.component';
import { CurrentCommitteePageComponent } from './members-page/current-committee-page/current-committee-page.component';
import { GeneralMembersPageComponent } from './members-page/general-members-page/general-members-page.component';
import { MembersPageComponent } from './members-page/members-page.component';

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
  {path: 'donate', component: DonatePageComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
