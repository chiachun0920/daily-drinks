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

  isShowModal: boolean = false;

  ice: string = "正常冰";
  sugar: string = "正常糖";

  modalResult;

  constructor(private app: AppService) {}

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.app.getMenu().forEach(res => {
      this.menu = res.menu;
    })
  }

  async onAdd(event) {
    try {
      await this.openModal()
    } catch (err) {
      return;
    }

    this.orders.push({ ...event, notes: [ this.ice, this.sugar ] });
  }

  onDelete(index) {
    this.orders = this.orders.filter((order, i) => i !== index);
  }

  openModal() {
    return new Promise((resolve, reject) => {
      this.isShowModal = true;
      this.modalResult = { resolve, reject };
    }).then(_ => this.isShowModal = false)
  }

  closeModal(reason) {
    if (reason === 0) {
      this.modalResult.resolve();
    }
    this.modalResult.reject();
  }
}
