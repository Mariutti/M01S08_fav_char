import { Component, OnInit } from '@angular/core';
import { FormComponentService } from './form-service.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponentComponent {
  constructor(private formService: FormComponentService) {}

  user: number = 0;
  email: string = '';
  pwd: string = '';

  submit() {
    const userData = {
      email: this.email,
      pwd: this.pwd,
    };
    this.formService.setStorage(this.user, userData);
    this.user += 1;
    this.email = '';
    this.pwd = '';
  }
}
