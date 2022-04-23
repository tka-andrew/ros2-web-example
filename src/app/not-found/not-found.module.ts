import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { provideRoutes } from '@angular/router';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [
    // this is needed, else the module doesnt have a default route
    provideRoutes([{path: '', component: NotFoundComponent }])
  ]
})
export class NotFoundModule { }
