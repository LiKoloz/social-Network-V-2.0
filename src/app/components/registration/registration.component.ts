import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  password1!:number
  password2!:number

  constructor() { }

  registrationForm!:FormGroup

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl('',
        [Validators.required,
        Validators.pattern(/^[a-z ,.'-]+$/i)]),
      'secondName': new FormControl('',
        [Validators.required,
        Validators.pattern(/^[a-z ,.'-]+$/i)]),
      'phoneNumber': new FormControl('',
        [Validators.required,
        Validators.pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)]),
      'email': new FormControl('',
        [Validators.required, Validators.email]),
      'password': new FormControl('',
        [Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      'password2': new FormControl('',
        [Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])

    })
  }

  submitRegistration() {

  }
}
