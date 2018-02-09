import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamineComponent } from './examine.component';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [ExamineComponent]
})
export class ExamineModule { }
