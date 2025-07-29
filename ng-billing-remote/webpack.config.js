const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'ngBillingRemote',
  filename: 'remoteEntry.js',
  exposes: {
    './BillingComponent': './src/app/billing/billing.ts',
  },
  remotes: {
    ngShoppingHost: 'http://localhost:5000/remoteEntry.js'
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "@ngrx/store": { singleton: true, strictVersion: true },
  },

});
