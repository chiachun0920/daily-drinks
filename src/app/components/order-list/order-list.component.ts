import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() orders;
  @Output() delete: EventEmitter<number> = new EventEmitter();;

  get total() {
    return this.orders.reduce((pre, current) => {
      return current.price + pre;
    }, 0);
  }

  constructor() { }

  ngOnInit(): void { }
}
