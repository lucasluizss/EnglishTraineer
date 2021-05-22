import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    if (environment.production && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration()
        .then(active => !active && navigator.serviceWorker.register('/EnglishTrainner/ngsw-worker.js'));
    }
  })
  .catch(err => console.error(err));
});
