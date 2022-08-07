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

  imageUrl : string = 'https://source.unsplash.com/600x600/?sig=1';
  selectedyear: string = '';
  selectedFilter: string = '';
  //imageGridStyleList = ['big', 'horizontal', 'vertical'];
  imageGridStyle : string = '';

  years  = [
    {value: '2013', viewValue: '2013'},
    {value: '2014', viewValue: '2014'},
    {value: '2015', viewValue: '2015'},
  ];

  filter  = [
    {value: 'photo', viewValue: 'Photos'},
    {value: 'video', viewValue: 'Videos'}

  ];

  constructor(private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(ImageDetailsComponent);

  }

  openDialogA(imagelink: string){
      console.log(imagelink);
      
  }

  generateRandomValueForDynamicPhotoGrid(){
    let min = 1;
    let max = 9;
    let difference = max-min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    if(rand <= 3){
      this.imageGridStyle = 'horizontal';
    }
    else if(rand > 3 && rand <= 7){
      this.imageGridStyle = 'big';
    }
    else{
      this.imageGridStyle = 'vertical';
    }
    console.log(this.imageGridStyle);
    return this.imageGridStyle;
  }
  

 
  





































}




function generateRandomValueForDynamicPhotoGrid() {
  throw new Error('Function not implemented.');
}

