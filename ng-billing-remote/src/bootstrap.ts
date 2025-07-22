import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Billing } from './app/billing/billing';
import { createCustomElement } from '@angular/elements';

// bootstrapApplication(Billing, appConfig)
// .then(appRef => {
//   const el = createCustomElement(Billing, {
//     injector: appRef?.injector
//   });
//   if(!customElements.get('app-billing')) {
//     customElements.define('app-billing', el);
//   }
// })
bootstrapApplication(Billing, appConfig)
  .catch((err) => console.error(err));
