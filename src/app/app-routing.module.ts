import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { FriendComponent } from './friend/friend.component'
import { ContactUsComponent } from './contact-us/contact-us.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const appRoutes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'friend', component: FriendComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'},


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
