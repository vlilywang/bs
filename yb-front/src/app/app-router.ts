import { Routes} from '@angular/router';

export const ROUTE_CONFIG: Routes = [
//   {
//     path: '',
//     redirectTo: '/applogin',
//     pathMatch: 'full',
//   },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadChildren: 'app/modules/app/app.module#AppModule',
  },
];


