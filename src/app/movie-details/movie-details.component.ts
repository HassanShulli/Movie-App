import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  sentId: any;
  description: any;
  movieDetails: any;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.checkParams();
    console.log('MOVIE DETAILS');
    // this.getMovieDetails('e6464ce6-42c9-43ae-be23-0dd57f50add1');
  }

  checkParams() {
    console.log('this.route.snapshot.queryParams : ', this.route.snapshot.queryParams);
    this.sentId = this.route.snapshot.queryParams['id'];
    if (this.sentId) {
      this.getMovieDetails(this.sentId);
    }
  }


  getMovieDetails(id) {
    this.dataService.getMovieDetails(id)
      .subscribe(response => {
        if (response) {
          console.log('movie details : response : ', response);
          this.movieDetails = response.data;
          this.description = this.movieDetails.short_description;
        }
      });
  }

  toggleDescription(toggle) {
    if (toggle === 'more') {
      this.description = this.movieDetails.description;
    } else if (toggle === 'less') {
      this.description = this.movieDetails.short_description;
    }
  }

}
