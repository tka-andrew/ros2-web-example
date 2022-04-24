import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-turtlesim-control',
  templateUrl: './turtlesim-control.component.html',
  styleUrls: ['./turtlesim-control.component.scss']
})
export class TurtlesimControlComponent implements OnInit {

  currentPose = {
    angular_velocity: 0,
    linear_velocity: 0,
    theta: 0,
    x: 0,
    y: 0
  };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  turtleSimControl(direction: string) {
    const twistMsg = {
      angular: {
        x: 0.0,
        y: 0.0,
        z: 0.0
      },
      linear: {
        x: 0.0,
        y: 0.0,
        z: 0.0
      }
    }
    switch (direction) {
      case "up": {
        twistMsg.linear.x = 2.0;
        break;
      }
      case "down": {
        twistMsg.linear.x = -2.0;
        break;
      }
      case "left": {
        twistMsg.angular.z = 2.0;
        break;
      }
      case "right": {
        twistMsg.angular.z = -2.0;
        break;
      }
    }
    this.http.post<any>('http://localhost:3000/turtlesim/cmd_vel', twistMsg).subscribe();
  }

  getCurrentPose() {
    this.http.get<any>('http://localhost:3000/turtlesim/pose').subscribe(response => {
      this.currentPose = response.data;
    })
  }

}
