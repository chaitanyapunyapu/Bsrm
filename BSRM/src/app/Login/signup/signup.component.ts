import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm:any= FormGroup;
  passwordsMatch = true;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: BikedetailsService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator.bind(this)
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (password !== confirmPasswordControl?.value) {
      this.passwordsMatch = false;
      confirmPasswordControl?.setErrors({mismatch: true});
    } else {
      this.passwordsMatch = true;
      confirmPasswordControl?.setErrors(null);
    }
  }
  
  

  submit(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.getRawValue();
      this.authService.registerNewUser(userData).subscribe({
        next: () => {
          alert('Registration successful! Please login.');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Registration failed', err);
          alert('Registration failed. Username or Email might already be taken.');
        }
      });
    }
  }
}

