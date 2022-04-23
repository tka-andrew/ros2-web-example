import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-contents',
  templateUrl: './main-contents.component.html',
  styleUrls: ['./main-contents.component.scss']
})
export class MainContentsComponent implements OnInit {

  constructor() { 
    console.log("initialized")
  }

  ngOnInit(): void {
    console.log("initialized")

  }

}
