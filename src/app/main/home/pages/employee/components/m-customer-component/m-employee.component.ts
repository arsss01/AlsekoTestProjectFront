import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzModalRef, NzNotificationService} from 'ng-zorro-antd';
import {EmployeeService} from '../../../../../../services/employee.service';

@Component({
  selector: 'app-m-employee',
  templateUrl: './m-employee.component.html',
  styleUrls: ['./m-employee.component.scss']
})
export class MEmployeeComponent implements OnInit {
  @Input() employee: any;
  @Input() isEdit: boolean;
  responseCustomer: any;
  validateForm: FormGroup;
  materialValues = [];
  material: any = {id: null, name: null, category: null, cost: null};

  constructor(
    private modal: NzModalRef,
    private notification: NzNotificationService,
    private employeeService: EmployeeService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [null],
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      patronymic: [null, [Validators.required]],
      gender: ['male', [Validators.required]]
    });


    if (this.employee) {
      this.employeeService.getEmployeeById(this.employee.employeeId).then((employee: any) => {
        this.materialValues = employee.materialValues;
        this.validateForm.patchValue(employee);
        this.responseCustomer = employee;
      });
    }
  }

  submitForm(destroy: boolean): void {
    const employee = this.validateForm.getRawValue();
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.status === 'VALID') {
      employee.materialValues = this.materialValues;
      setTimeout(() => {
        if (!this.isEdit) {
          this.employeeService.saveEmployee(employee).then((response: any) => {
            this.modal.destroy({response, isEdit: this.isEdit});
            this.notification.success('Сохранение данных', 'Сохранение прошло успешно');
          }).catch(err => {
            this.notification.error('Сохранение данных', 'Произошла ошибка при сохранение');
          });
        } else {
          this.employeeService.updateEmployee(employee).then((response: any) => {
            if (destroy) {
              this.modal.destroy({response: employee, isEdit: this.isEdit});
            }
            this.notification.success('Обновление данных', 'Обновление прошло успешно');
          }).catch(err => {
            this.notification.error('Обновление данных', 'Произошла ошибка при обновление');
          });
        }
      }, 800);
    }
  }

  destroyModal() {
    if (this.employee) {
      this.modal.destroy({response: this.employee, isEdit: this.isEdit});
    }
    this.modal.destroy();
  }

  delete(index: any) {
    this.materialValues.splice(index, 1);
  }

  clear($event: MouseEvent) {
    this.material = {id: null, name: null, category: null, cost: null};
  }

  add($event: MouseEvent) {
    this.material.date = new Date();
    this.materialValues.push(this.material);
    this.material = {id: null, name: null, category: null, cost: null};
  }
}
