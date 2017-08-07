import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ItemComponent } from './pages/search/item/item.component';
import { SearchbarComponent } from './pages/search/searchbar/searchbar.component';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
    path: 'home',
    component: SearchComponent,
  }, {
    path: 'detail/:id',
    component: DetailComponent
  }, {
    path: 'wishlist',
    component: WishlistComponent
  }];
