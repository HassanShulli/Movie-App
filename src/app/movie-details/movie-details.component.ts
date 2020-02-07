import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    console.log('MOVIE DETAILS');
    this.getMovieDetails('e6464ce6-42c9-43ae-be23-0dd57f50add1');
  }


  getMovieDetails(id) {
    this.dataService.getMovieDetails(id)
      .subscribe(response => {
        if (response) {
          console.log('movie details : response : ', response);
        }
      });
  }

}
