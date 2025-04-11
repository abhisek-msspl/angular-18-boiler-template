import { inject } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpEvent, HttpRequest, HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';

export const httpAuthHeaderInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const _loadingBar = inject(LoadingBarService);
  const _authService = inject(AuthenticationService);

  /* Adding Authorization token in header */
  const headersConfig: Record<string, string> = {};

  /* If token found setting it in header */
  const token: string = _authService.getToken();

  if (token) {
    headersConfig['Authorization'] = 'Bearer ' + token;
  }

  _loadingBar.useRef().start();
  const HTTPRequest = req.clone({ setHeaders: headersConfig });

  return next(HTTPRequest).pipe(
    finalize(() => _loadingBar.useRef().complete()),
    catchError((error: any) => {
      _loadingBar.useRef().complete();
      return throwError(() => error);
    })
  );
};
