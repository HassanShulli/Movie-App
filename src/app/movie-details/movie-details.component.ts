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
  runningTime: any;
  runningHours: any;
  runningMinutes: any;
  hour: any;
  minute: any;

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

  back() {
    this.router.navigate(['/movie-list']);
  }

  getMovieDetails(id) {
    this.dataService.getMovieDetails(id)
      .subscribe(response => {
        if (response) {
          console.log('movie details : response : ', response);
          this.movieDetails = response.data;
          this.description = this.movieDetails.short_description;
          this.runningTime = this.movieDetails.running_time / (60 * 1000 * 60);
          this.runningHours = Math.floor(this.runningTime);
          this.runningMinutes = Math.floor((this.runningTime - Math.floor(this.runningTime)) * 60);
          this.hour = this.runningHours > 1 ? 'hours' : 'hour';
          this.minute = this.runningMinutes > 1 ? 'minutes' : 'minute';
          console.log('this.runningTime : ', this.runningTime);
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
