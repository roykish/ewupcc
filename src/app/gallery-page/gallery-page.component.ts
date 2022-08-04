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
  
  
}
