import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems = [
    { path: '/', name: 'home' },
    { path: '/gallery', name: 'gallery' },
    { path: '/current-committee', name: 'current committee' },
    { path: '/about-us', name: 'about us' },
    { path: '/about-us', name: 'donate' }

    

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
