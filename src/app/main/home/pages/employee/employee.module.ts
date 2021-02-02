import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../shared/shared.module';
import {
  NzButtonModule, NzCollapseModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule, NzModalModule,
  NzPaginationModule, NzRadioModule,
  NzSelectModule,
  NzTableModule
} from 'ng-zorro-antd';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {EmployeeComponent} from './employee.component';
import {EmployeeRoutingModule} from './employee-routing.module';
import {MEmployeeComponent} from './components/m-customer-component/m-employee.component';

@NgModule({
  declarations: [EmployeeComponent, MEmployeeComponent],
  imports: [
    EmployeeRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    NzPaginationModule,
    NzGridModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzModalModule,
    NzCollapseModule,
    DragDropModule,
    NzRadioModule,
  ]
})
export class EmployeeModule {
}
