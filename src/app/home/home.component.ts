import {Component, OnInit, AfterViewInit} from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  options = {fullWidth: false, duration: 200};
  items = ['https://commodusprod.hooq.tv/cdnimagesprod/titles/2366358/POSTER/1571888093-ee64aad44af1dd303bf7087cda410d31af8ea85c.jpg?',
    'https://commodusprod.hooq.tv/cdnimagesprod/titles/1783658/POSTER/1568359852-05f8bd0ce3fe7b5ce10721a8021e1e3c9b907aba.jpg?',
    'https://commodusprod.hooq.tv/cdnimagesprod/titles/2416442/POSTER/1577195809-262f43ee14830699c9e9b71eb101f2e811e7380c.jpg?',
    'https://commodusprod.hooq.tv/cdnimagesprod/titles/2418624/POSTER/1580808526-2ff13796cc9eb34ac5db49834b0fe70686a712d1.jpg?',
    'https://commodusprod.hooq.tv/cdnimagesprod/titles/1783761/POSTER/1579597955-ad6d934ce12d1c86eedfc5d5c2d3eb91519858e3.jpg?',
    'https://commodusprod.hooq.tv/cdnimagesprod/titles/1783654/POSTER/1565915236-97e36be4815e10dcd14df30fde35b4b6abcd4a91.jpg?',
    'https://commodusprod.hooq.tv/cdnimagesprod/titles/2417704/POSTER/1577697642-e56288f78d20573f68fafc84010d44dd64dbe459.jpg?',
    'https://commodusprod.hooq.tv/cdnimagesprod/titles/29089/POSTER/1571134428-f0a988333a949308032f631c45b9c6a3b733d023.jpg?',
    'https://commodusprod.hooq.tv/cdnimagesprod/titles/29098/POSTER/1554813640-3ce82ac9962b6793cafeaeb93cf8311649686ab2.jpg?'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, this.options);
  }
}
