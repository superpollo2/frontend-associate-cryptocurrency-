import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyCryptosComponent } from './my-cryptos/my-cryptos.component';
import { AllCryptosComponent } from './all-cryptos/all-cryptos.component';
import { authGuard } from './auth/auth.guard';
import { ProtectedComponent } from './layout/auth/protected/protected.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cryton',
    canActivate: [authGuard],
    component: ProtectedComponent,
    children: [
      {
        path: 'my-cryptos',
        component: MyCryptosComponent,
      },
      {
        path: 'all-cryptos',
        component: AllCryptosComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
