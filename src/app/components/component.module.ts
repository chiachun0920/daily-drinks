import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header';
import { MenuComponent } from './menu';
import { MenuItemComponent } from './menu-item';
import { SubMenuComponent } from './sub-menu';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent
  ],
  imports: [ CommonModule ],
  exports: [
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent
  ],
  providers: [],
})
export class ComponentModule {}