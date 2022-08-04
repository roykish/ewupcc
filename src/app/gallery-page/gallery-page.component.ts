import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})



export class GalleryPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageUrl : string = 'https://source.unsplash.com/600x600/?sig=1';


  selectedValue: string = '';
  selectedCar: string = '';

  years  = [
    {value: '2013', viewValue: '2013'},
    {value: '2014', viewValue: '2014'},
    {value: '2015', viewValue: '2015'},
  ];

  filter  = [
    {value: 'photo', viewValue: 'photos'},
    {value: 'video', viewValue: 'videos'}

  ];
  
}
