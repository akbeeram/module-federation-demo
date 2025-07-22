import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Billing } from './app/billing/billing';
import { createCustomElement } from '@angular/elements';
import { provideStore } from '@ngrx/store';

// Enable to load the angular remote in a react host app
// bootstrapApplication(Billing, appConfig)
// .then(appRef => {
//   const el = createCustomElement(Billing, {
//     injector: appRef?.injector
//   });
//   if(!customElements.get('app-billing')) {
//     customElements.define('app-billing', el);
//   }
// })

// bootstrapApplication(Billing, appConfig)
//   .catch((err) => console.error(err));

(async () => {
  // Dynamically load the store from the host
  const storeModule = await import('ngShoppingHost/CounterStore');
  appConfig.providers.push(
    provideStore({count: storeModule.countReducer})
  );
  
  bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));
})();