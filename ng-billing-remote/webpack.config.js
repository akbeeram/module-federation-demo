const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'ngBillingRemote',
  filename: 'remoteEntry.js',
  exposes: {
    './BillingComponent': './src/app/billing/billing.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
