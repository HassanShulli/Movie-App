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

  ngOnInit() {
    console.log('MOVIE DETAILS');
    this.itemsPerPage = 10;
    this.pageIndex = 1;
    this.total = 0;
    this.getMovieList();
  }

  getMovieList() {
    this.dataService.getMovies(this.pageIndex, this.itemsPerPage)
      .subscribe(response => {
        if (response) {
          console.log('response : ', response);
          console.log('response.pagination : ', response.pagination);
          console.log('response.pagination.totalPages : ', response.pagination.totalPages);
          // console.log('response : ', response);
          this.total = response.pagination.totalPages;
          this.movieList = response.data.filter((item) => {
            return item.type === 'Multi-Title-Manual-Curation';
          });
          console.log('this.movieList : ', this.movieList);
        }
      });
  }

  previousPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.getMovieList();
    }
  }

  nextPage() {
    if (this.pageIndex < this.total) {
      this.pageIndex++;
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
