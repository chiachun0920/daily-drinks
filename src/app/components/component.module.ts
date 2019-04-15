import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header';
import { MenuComponent } from './menu';
import { MenuItemComponent } from './menu-item';
import { OrderComponent } from './order';
import { OrderListComponent } from './order-list';
import { SubMenuComponent } from './sub-menu';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    OrderComponent,
    OrderListComponent,
    SubMenuComponent
  ],
  imports: [ CommonModule ],
  exports: [
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    OrderComponent,
    OrderListComponent,
    SubMenuComponent
  ],
  providers: [],
})
export class ComponentModule {}