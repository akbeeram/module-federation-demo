import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideStore } from '@ngrx/store';

(async () => {
  // Dynamically load the store from the host
  const storeModule = await import('ngShoppingHost/CounterStore');
  appConfig.providers.push(
    provideStore({ count: storeModule.countReducer })
  );

  bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));
})();