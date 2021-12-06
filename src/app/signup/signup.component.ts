import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignUp: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.formSignUp = this.formBuilder.group({
      companyName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
      segment: new FormControl('', [Validators.required, Validators.minLength(3)]),
      numberUsers: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      phone: new FormControl('', [Validators.required, Validators.minLength(14)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    this.toastr.success('We have received your request', 'Thank You!');
    this.formSignUp.reset();
    this.route.navigate(['thankyou']);
  }

  isFormValid() {
    let result = this.formSignUp.touched && !this.formSignUp.valid;
    console.log(result);
    return !this.formSignUp.valid;
  }
}
