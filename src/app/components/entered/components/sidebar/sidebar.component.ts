import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../../../services/login.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  id: string | null = localStorage.getItem('id');

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  logOut(){
  this.loginService.logout()
  }
}
