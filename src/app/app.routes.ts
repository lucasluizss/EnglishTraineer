import { Routes } from '@angular/router';

import { AppGuard } from './app.guard';
import { MainLayoutComponent } from './layouts/main/main.component';
import { PublicLayoutComponent } from './layouts/public/public.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./views/sign-in/sign-in.module').then((x) => x.SignInModule),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./views/sign-up/sign-up.module').then((x) => x.SignUpModule),
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./views/home/home.module').then((x) => x.HomeModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
