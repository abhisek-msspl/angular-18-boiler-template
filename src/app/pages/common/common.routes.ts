import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'not-found',
    title: 'Not Found',
    loadComponent: () => import('../common/pages').then(c => c.NotFoundComponent),
  },
];
