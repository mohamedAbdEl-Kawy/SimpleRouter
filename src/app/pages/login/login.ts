import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  constructor(private router: Router){}


onFormSubmit() {
    const savedData = JSON.parse(localStorage.getItem('user') || '{}');
    const loginData = this.loginForm.value;

    if (loginData.email === savedData.email && loginData.password === savedData.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(savedData));
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
