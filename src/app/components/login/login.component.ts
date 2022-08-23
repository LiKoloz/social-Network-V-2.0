import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  constructor(
    private router: Router,
    private loginService: LoginService) {
  }
  submitLogin(){
    this.loginService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['entered']),
      error: (err)=> alert(err.message)
    })
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',
        [Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })
  }

}
