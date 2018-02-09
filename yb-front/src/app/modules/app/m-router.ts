import { Routes} from '@angular/router';
import { AppComponent} from './app.component';

export  const ROUTE_CONFIG: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: '',
      redirectTo: '/app/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: 'app/modules/app/modules/home/home.module#HomeModule',
      pathMatch: 'full',
    },
    {
      path: 'user',
      pathMatch: 'full',
      loadChildren: 'app/modules/app/modules/user/user.module#UserModule',
    },
    {
      path: 'message',
      pathMatch: 'full',
      loadChildren: 'app/modules/app/modules/message/message.module#MessageModule',
    },
    {
      path: 'information',
      pathMatch: 'full',
      loadChildren: 'app/modules/app/modules/current-account/current-account.module#CurrentAccountModule',
    }
  ]
}]

