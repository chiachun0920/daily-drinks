import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../types';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() name: string = '';
  @Input() price: number = 0;

  @Output() add: EventEmitter<MenuItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  addItem() {
    this.add.emit({ name: this.name, price: this.price });
  }
}
