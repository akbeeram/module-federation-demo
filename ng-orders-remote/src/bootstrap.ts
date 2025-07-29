import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Orders } from './app/orders/orders';
import { createCustomElement } from '@angular/elements';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


// Enable to load the angular remote in a react host app
bootstrapApplication(Orders, appConfig)
  .then(appRef => {
    const el = createCustomElement(Orders, {
      injector: appRef?.injector
    });
    if (!customElements.get('app-orders')) {
      customElements.define('app-orders', el);
    }
  })