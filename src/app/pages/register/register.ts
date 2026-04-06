import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styles: ``,
})
export class Register{
  regForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router) {}


  onFormSubmit(){
    if (this.regForm.valid) {
    localStorage.setItem('user', JSON.stringify(this.regForm.value));
    this.router.navigate(['/login']);
  }else{
    alert('Please fill all teh fields correctly');
  }}

}
