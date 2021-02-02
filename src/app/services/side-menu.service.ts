import {Injectable} from '@angular/core';
import {SideMenu} from '../models/SideMenu';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor() {
  }

  getSideMenuItems(): SideMenu[] {
    const items: SideMenu[] = [];
    items.push(this.getPanelCustomer());
    return items;
  }

  getPanelCustomer(): SideMenu {
    const sidemenu = new SideMenu();
    sidemenu.setParams({name: 'Сотрудники', icon: 'contacts', routing: 'employee', child: false});
    return sidemenu;
  }

}
