import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-turtlesim-control',
  templateUrl: './turtlesim-control.component.html',
  styleUrls: ['./turtlesim-control.component.scss']
})
export class TurtlesimControlComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/').subscribe(response => {
        console.log(response.data);
    })
  }

}
