import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { FriendAddComponent } from './friend/friend-add/friend-add.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './widget/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    FriendAddComponent,
    FriendListComponent,
    HoverHighlightDirective,
    ContactUsComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
