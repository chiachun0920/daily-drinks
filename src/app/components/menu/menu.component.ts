import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu, MenuItem } from '../../types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu;
  @Output() add: EventEmitter<MenuItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
