import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) {
  }

  movieList: any;
  itemsPerPage: number;
  pageIndex: number;
  total: number;

  paginator = {
    index: 1,
    total: 10,
    limit: 10,
    pagesToShow: 2
  };

  ngOnInit() {
    console.log('MOVIE DETAILS');
    this.itemsPerPage = 10;
    this.pageIndex = 0;
    this.total = 0;
    this.getMovieList();
  }

  getMovieList() {
    this.dataService.getMovies(this.paginator.index + 1, this.paginator.limit)
      .subscribe(response => {
        if (response) {
          console.log('response : ', response);
          console.log('response.pagination : ', response.pagination);
          console.log('response.pagination.totalPages : ', response.pagination.totalPages);
          // console.log('response : ', response);
          this.paginator.total = response.pagination.totalCount;
          this.paginator.pagesToShow = response.pagination.totalPages;
          this.movieList = response.data.filter((item) => {
            return item.type === 'Multi-Title-Manual-Curation';
          });
          console.log('this.movieList : ', this.movieList);
        }
      });
  }

  // paginator functions

  onPrevMediaPage($event) {
    if ($event) {
      this.paginator.index--;
      this.getMovieList();
    }
  }

  onNextMediaPage($event) {
    if ($event) {
      this.paginator.index++;
      this.getMovieList();
    }
  }

  onMediaPageSelect($event) {
    if (this.paginator.index !== $event) {
      this.paginator.index = $event;
      // if (this.paginator.index < 1) {
      //   this.paginator.index = 1;
      // }
      this.getMovieList();
    }
  }

  navigateToMovieDetails(movieId) {
    this.router.navigate(['/movie-details'], {
      queryParams: {
        id: movieId
      }
    });
  }


}
