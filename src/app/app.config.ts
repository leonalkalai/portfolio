import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Enables efficient change detection
    provideRouter(routes), // Provides routing using routes defined in app.routes.ts
    provideClientHydration() // Allows rehydration in Universal (SSR) apps
  ]
};
