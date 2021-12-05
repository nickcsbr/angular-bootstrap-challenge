import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
      password: new FormControl(''),
    });
  }

  onSubmit() {

    console.log(this.formLogin);
    this.formLogin.reset();
    this.route.navigate(['/']);
  }

}
