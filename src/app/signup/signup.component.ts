import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.formSignUp = this.formBuilder.group({
      companyName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
      segment: new FormControl(''),
      numberUsers: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {

    console.log(this.formSignUp);
    this.toastr.success('We will get in touch soon!', 'Thank You!');
    this.formSignUp.reset();
  }

}
