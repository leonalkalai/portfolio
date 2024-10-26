// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
          provideRouter(routes),
            ],
              schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
              };
