
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import { MovieListComponent} from './movie-list/movie-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/movie-details', pathMatch: 'full'},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'movie-details', component: MovieDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
