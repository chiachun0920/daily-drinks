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
  orders: any[] = [];

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
    this.orders.push({ ...event });
  }

  onDelete(index) {
    this.orders = this.orders.filter((order, i) => i !== index);
  }
}
