import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelinesComponent} from "./timelines/timelines.component";
import {PlaylistComponent} from "./playlist/playlist.component";
import {PlaylistPlayerComponent} from "./playlist-player/playlist-player.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {DicPageComponent} from "./dictionary/dic-page/dic-page.component";
import {DicDetailComponent} from "./dictionary/dic-detail/dic-detail.component";
import {ProductUpdateComponent} from "./product/product-update/product-update.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";


const routes: Routes = [
  {path: 'timelines', component: TimelinesComponent},
  {
    path: 'playlist', component: PlaylistComponent,
    children: [{path: ':id', component: PlaylistPlayerComponent}]
  },
  {path: 'dictionary', component: DicPageComponent},
  {path: 'detail/:id', component: DicDetailComponent},

  // {path: 'product/list', component: ProductListComponent},
  // {path: 'product/create', component: ProductCreateComponent},
  // {path: 'product/edit/:id', component: ProductUpdateComponent},
  // {path: 'product/delete/:id', component: ProductDeleteComponent},
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
