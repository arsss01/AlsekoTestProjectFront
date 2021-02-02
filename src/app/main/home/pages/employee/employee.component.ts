import {Component, OnInit} from '@angular/core';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {HeaderTextService} from '../../../../services/header-text.service';
import {EmployeeService} from '../../../../services/employee.service';
import {Paginator} from '../../../../models/Paginator';
import {MEmployeeComponent} from "./components/m-customer-component/m-employee.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: any[] = [];
  paginator: Paginator = new Paginator();
  loading = false;

  constructor(private modalService: NzModalService,
              private headerTextService: HeaderTextService,
              private notification: NzNotificationService,
              private employeeService: EmployeeService) {
    this.headerTextService.setMessage('Страница ролей');
    this.getEmployeePaginator(1);
  }

  getEmployeePaginator(pageIndex) {
    this.loading = true;
    this.paginator.pageIndex = pageIndex;
    this.employeeService.getEmployee(this.paginator).then((response: any) => {
      this.employee = response.content;
      this.paginator.total = response.totalElements;
      this.loading = false;
    }).catch(err => {
      this.loading = false;
    });
  }


  ngOnInit(): void {

  }

  deactivate(employee: any) {
    this.modalService.confirm({
      nzTitle: 'Удаление',
      nzContent: 'Вы уверены, что хотите удалить сотрудника?',
      nzOkText: 'Да',
      nzCancelText: 'Отмена',
      nzOnOk: () => {
        this.employeeService.removeEmployee(employee.employeeId).then(() => {
          this.employee = this.employee.filter(cust => cust.employeeId !== employee.employeeId);
          this.notification.success('Удаление', 'Удаление данного сотрудника прошло успешно.');
        }).catch(err => {
          this.notification.error('Удаление', 'Произошла ошибка при удаление сотрудника.');
        });
      }
    });
  }


  modal(employee: any) {
    const res = this.modalService.create({
      nzTitle: employee ? 'Редактировать роль' : 'Добавить роль',
      nzContent: MEmployeeComponent,
      nzWidth: 800,
      nzOkText: employee ? 'Обновить' : 'Добавить',
      nzCancelText: 'Отменить',
      nzComponentParams: {employee, isEdit: !!employee}
    });

    res.afterClose.subscribe(resp => {
      if (resp) {
        this.getEmployeePaginator(1);
      }
    });
  }
}
