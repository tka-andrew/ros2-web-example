import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentsComponent } from './main-contents.component';
import { TurtlesimControlComponent } from './turtlesim-control/turtlesim-control.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'turtlesimControl'
      },
      {
        path: 'turtlesimControl',
        component: TurtlesimControlComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentsRoutingModule { }
