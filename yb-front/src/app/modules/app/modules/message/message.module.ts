import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [MessageComponent]
})
export class MessageModule { }
