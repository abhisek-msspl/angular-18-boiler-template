import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    title: 'Dashboard',
    loadComponent: () => import('./dashboard/pages').then(c => c.DashboardComponent),
  },
];
