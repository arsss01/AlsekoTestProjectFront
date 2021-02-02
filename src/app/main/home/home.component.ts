import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../services/side-menu.service';
import {SideMenu} from '../../models/SideMenu';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {HeaderTextService} from '../../services/header-text.service';
import {LocationService} from '../../services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  headerText: string;
  sideMenu: SideMenu[];
  city: any;
  isCollapsed = false;

  constructor(private sideMenuService: SideMenuService,
              private headerService: HeaderTextService,
              private modal: NzModalService,
              private location: LocationService,
              public router: Router) {

    this.city = location.getCitySettings();
    this.sideMenu = this.sideMenuService.getSideMenuItems();
    this.headerService.message.subscribe(headerText => {
      this.headerText = headerText;
    });
  }

  ngOnInit(): void {
    if (window.innerWidth <= 900) {
      this.isCollapsed = true;
    }
  }

  route(routing: string) {
    this.router.navigate([routing]);
  }
}
