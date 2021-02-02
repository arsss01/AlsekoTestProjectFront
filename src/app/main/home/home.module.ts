import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {NzIconModule, NzLayoutModule, NzMenuModule, NzModalControlService, NzModalService} from 'ng-zorro-antd';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
  ],
  exports: [RouterModule],
  providers: [NzModalService, NzModalControlService]
})
export class HomeModule {
}
