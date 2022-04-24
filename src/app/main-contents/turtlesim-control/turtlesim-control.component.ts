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

  turtleSimControl(direction: string)
  {
    const twistMsg = {
      angular: {
        x: 0.0,
        y:  0.0,
        z:  0.0
      }, 
      linear:  {
        x:  0.0,
        y:  0.0,
        z:  0.0
      }
    }
    switch(direction) {
      case "up" :{
        twistMsg.linear.x = 2.0;
        console.log('up')
        break;
      }
      case "down" :{
        twistMsg.linear.x = -2.0;
        break;
      }
      case "left" :{
        twistMsg.angular.z = 2.0;
        break;
      }
      case "right" :{
        twistMsg.angular.z = -2.0;
        break;
      }
    }
    this.http.post<any>('http://localhost:3000/turtlesim/cmd_vel', twistMsg).subscribe();
  }

}
