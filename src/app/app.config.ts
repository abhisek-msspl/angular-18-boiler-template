import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { provideToastr } from 'ngx-toastr';
import { environment } from '@env/environment';
import { provideRouter } from '@angular/router';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    // manually added providers
    provideToastr({
      timeOut: 3000,
      closeButton: true,
      positionClass: 'toast-top-right',
    }),
    provideStore([], withNgxsLoggerPlugin({ disabled: environment.production })),
  ],
};
