import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string = 'Shopping Cart';
  images = [
    'assets/img/BingImageOfTheDay.jpg',
    'assets/img/BingImageOfTheDay_20200702.jpg',
    'assets/img/BingImageOfTheDay_20200703.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
