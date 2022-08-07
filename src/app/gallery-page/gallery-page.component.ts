import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { ImageDetailsComponent } from './image-details/image-details.component';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
},
)

export class GalleryPageComponent implements OnInit {

  constructor(private route: Router, public dialog: MatDialog) { }

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
    {value: 'photo', viewValue: 'Photos'},
    {value: 'video', viewValue: 'Videos'}

  ];


  openDialog(){
    const dialogRef = this.dialog.open(ImageDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {

    });

  }
  
}




