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
    { path: '/members', name: 'memebrs',
      subItems:[
      {
        path: '/members/current-committe',
        name: 'current committee'
      },
      {
        path: '/members/general-members',
        name: 'general members'
      },
      {
        path: '/members/alumni',
        name: 'alumni'
      },

    ] },
    { path: '/about-us', name: 'about us' },
    { path: '/donate', name: 'donate' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
