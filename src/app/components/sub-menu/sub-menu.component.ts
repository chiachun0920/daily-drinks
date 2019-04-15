import { Component, Input, Output, EventEmitter } from '@angular/core';

import * as obp from 'object-path';

import { SubMenu, MenuItem } from '../../types';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent {
  @Input() subMenu: SubMenu;
  @Output() add: EventEmitter<MenuItem> = new EventEmitter();

  get menuItems() {
    return obp.get(this.subMenu, 'menuItems');
  }

  constructor() { }
}
