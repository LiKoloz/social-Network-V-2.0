import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toTop(){
    window.scrollTo(0, 0)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
