import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      status: [null, [Validators.required]],
      name: [null, [Validators.required]],
      birth: [null,[Validators.required, Validators.maxLength(10)]],
      phone: [null, [Validators.required, Validators.maxLength(14)]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

  ngOnInit() {
  }

}
