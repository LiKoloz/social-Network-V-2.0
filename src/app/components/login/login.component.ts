import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {FullUser} from "../../fullUser";

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

  fullUser!: FullUser

  async getUser(){
    this.loginService.getUser(this.loginForm.value).subscribe({
      next: (data: any) => {
        console.log(this.loginForm.value)
       let fullName = data.firstName + ' ' + data.secondName

        localStorage.setItem('data',data)

        localStorage.setItem("firstName", data.firstName)
        localStorage.setItem("secondName", data.secondName)
        localStorage.setItem("fullName", fullName)
        localStorage.setItem("email", data.email)
        localStorage.setItem("age", data.age)
        localStorage.setItem("phone", data.phone)
        localStorage.setItem("post", data.post )

        console.log(data)
      }
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
