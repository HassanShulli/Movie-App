import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  movieList: any;

  ngOnInit() {
    console.log('MOVIE DETAILS');
    this.getMovieList();
  }

  getMovieList() {
    this.dataService.getMovies()
      .subscribe(response => {
        if (response) {
          console.log('response : ', response);
          this.movieList = response.data.filter((item) => {
            return item.type === 'Multi-Title-Manual-Curation';
          });
          console.log('this.movieList : ', this.movieList);
        }
      });
  }



}
