import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() name: string;
  @Input() price: string;
  @Input() notes: string[] = ['ice', 'sugar'];

  @Output() delete: EventEmitter<number> = new EventEmitter();
  isExpand = true;

  constructor() { }

  ngOnInit(): void { }
}
