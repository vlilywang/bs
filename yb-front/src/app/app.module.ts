import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  需要手动添加 start
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
// 路由参数
import { RouterModule} from '@angular/router';
import { ROUTE_CONFIG} from './app-router';

//  rxjs 操作符
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/withLatestFrom';

//  默认跳转的模块
import { LoginModule} from './modules/login/login.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ServicesModule,
    LoginModule,
    HttpModule,
    RouterModule.forRoot(ROUTE_CONFIG)
  ],
  providers: [{
    provide: 'BASE_CONFIG',
    useValue: {
      uri: 'http://localhost:3000'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


