import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Menu } from './types';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get<{ menu: Menu }>('assets/config/menu.json');
  }
}