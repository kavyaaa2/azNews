import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingLeftComponent } from './trending-left/trending-left.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
const routes: Routes = [
  {
    path:"",
    component:TrendingLeftComponent
  },
  {
    path: "latest-news/:id",
    component:LatestNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
