import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });


  onSubmit() {
    const enteredEmail = this.form.controls.email.value;
    const enteredPassword = this.form.controls.password.value;
    console.log(this.form);
    console.log(enteredEmail, enteredPassword)
  }

  onReset() {
    this.form.reset()
  }
}
