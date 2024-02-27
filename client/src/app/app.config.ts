import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(
      // HttpClient is provided using the provideHttpClient helper function (New Documentation)
      withFetch(),
      // The withFetch feature switches the client to use the fetch API instead.
      // fetch is a more modern API and is available in a few environments where XMLHttpRequest is not supported.
    ), 
  ]
};
