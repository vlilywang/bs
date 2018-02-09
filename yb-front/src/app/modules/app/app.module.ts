import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { MenuComponent } from './views/menu/menu.component';
import { LeftMenuComponent } from './views/left-menu/left-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent, MenuComponent, LeftMenuComponent]
})
export class AppModule { }
