import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    title: 'Login',
    loadComponent: () => import('./auth/pages').then(c => c.LoginComponent),
  },
];
