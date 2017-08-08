import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { 
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdMenuModule,
  MdListModule,
  MdInputModule,
  MdRadioModule
} from '@angular/material';
import 'hammerjs';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ItemComponent } from './pages/search/item/item.component';
import { SearchbarComponent } from './pages/search/searchbar/searchbar.component';
import { ProvidersService } from './providers.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WishlistComponent,
    DetailComponent,
    ItemComponent,
    SearchbarComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdListModule,
    MdInputModule,
    MdRadioModule,
    HttpModule
  ],
  providers: [ProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
