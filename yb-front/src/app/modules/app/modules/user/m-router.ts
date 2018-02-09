import { Routes} from '@angular/router';
import { UserComponent } from './user.component';
export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    // redirectTo: 'user'
    component: UserComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
];
