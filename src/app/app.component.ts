import { Component, OnInit } from '@angular/core';

import { Menu } from './types';

import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menu: Menu;

  constructor(private app: AppService) {}

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.app.getMenu().forEach(res => {
      this.menu = res.menu;
    })
  }

  onAdd(event) {
    console.log(event);
  }
}
