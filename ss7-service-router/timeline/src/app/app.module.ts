import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {PlaylistPlayerComponent} from './playlist-player/playlist-player.component';
import { DicPageComponent } from './dictionary/dic-page/dic-page.component';
import { DicDetailComponent } from './dictionary/dic-detail/dic-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    PlaylistComponent,
    PlaylistPlayerComponent,
    DicPageComponent,
    DicDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
