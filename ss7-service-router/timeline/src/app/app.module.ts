import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {PlaylistPlayerComponent} from './playlist-player/playlist-player.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DicPageComponent } from './dictionary/dic-page/dic-page.component';
import { DicDetailComponent } from './dictionary/dic-detail/dic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    PlaylistComponent,
    PlaylistPlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    DicPageComponent,
    DicDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
