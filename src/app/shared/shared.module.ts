import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {
  NzButtonModule,
  NzCollapseModule,
  NzGridModule,
  NzLayoutModule,
  NzModalModule,
  NzSpinModule
} from 'ng-zorro-antd';
import {DateFormatPipe} from '../pipes/date-format.pipe';
import {AlarmStatusPipe} from '../pipes/alarm-status.pipe';
import {IgnoreNullPipe} from '../pipes/ignore-null.pipe';
import {ChannelPipe} from '../pipes/channel.pipe';
import {GrassFieldPipe} from '../pipes/grass-field.pipe';
import {ApprovedPipe} from '../pipes/approved.pipe';
import {CheckNotEmptyPipe} from '../pipes/check-not-empty.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    DateFormatPipe,
    AlarmStatusPipe,
    IgnoreNullPipe,
    GrassFieldPipe,
    ChannelPipe,
    CheckNotEmptyPipe,
    ApprovedPipe,
  ],
  exports: [
    FooterComponent,
    DateFormatPipe,
    AlarmStatusPipe,
    GrassFieldPipe,
    ApprovedPipe,
    CheckNotEmptyPipe,
    IgnoreNullPipe,
    ChannelPipe,

  ],
  imports: [
    CommonModule,
    NzSpinModule,
    NzGridModule,
    NzButtonModule,
    NzModalModule,
    NzLayoutModule,
    NzCollapseModule,
  ]
})
export class SharedModule {
}
