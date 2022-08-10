import { Component, OnInit, inject, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: {imgUrl : string, title : string}) { }

  ngOnInit(): void {
     
  }
 

}
