import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDetailsComponent } from './image-details/image-details.component';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
},
)

export class GalleryPageComponent implements OnInit {

  selectedValue: string = '';
  selectedCar: string='';
  screenWidth: number = 0;

  yearList = [
    {value: '2011', viewValue: '2011'},
    {value: '2012', viewValue: '2012'},
    {value: '2013', viewValue: '2013'},
  ];

  filterTypeList = [
    {value: 'image', viewValue: 'Image'},
    {value: 'video', viewValue: 'Video'},
  ];

  listOfImageLinks =[
    'randomrandomrandom',
    'randomrandomrandom',
    'randomrandomrandom',
    'randomrandomrandom'    
  ]

  tilesForWideScreen = [
    { cols: 2, rows: 2, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'roy'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 2, rows: 2, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 2, rows: 2, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 2, rows: 2, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'},
    { cols: 1, rows: 1, imgUrl: 'https://picsum.photos/300/300', title:'hello'}
  ];


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.screenWidth = screen.width;

  }

   openDialog(imgUrl:string, title:string){
    const dialogRef = this.dialog.open(ImageDetailsComponent, {data: {imgUrl, title}});

   }

}



