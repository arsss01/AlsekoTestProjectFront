import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found.component';
import {PageNotFoundRoutingModule} from './page-not-found-routing.module';
import {NzButtonModule, NzResultModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    NzResultModule,
    NzButtonModule
  ]
})
export class PageNotFoundModule { }
