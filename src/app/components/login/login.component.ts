import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  constructor(
    private router: Router,
    private loginService: LoginService,
    private httpService: HttpService,
    ) {
  }

  async submitLogin() {
    this.loginService.getInfo(this.loginForm.value).subscribe({
      next: (data: any) => {
        if (data.bool == 0) {
          this.result = true
        }
      }
    })
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.loginService.login(this.loginForm.value, this.result).subscribe({
      next: () => this.router.navigate(['entered']),
      error: (err) => alert(err.message)
    })
  }

    result: boolean = false

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('',
        [Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    });
  if(this.loginService.isLoggedIn()){
    this.router.navigate(['entered'])
  }
  }
}
