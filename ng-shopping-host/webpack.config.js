const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'ngShoppingHost',
  filename: 'remoteEntry.js',
  remotes: {
    ngBillingRemote: 'http://localhost:5001/remoteEntry.js',
  },
  exposes: {
    './CounterStore': './src/store',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "@ngrx/store": { singleton: true, strictVersion: true },
    react: { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
    'react-dom': { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
  },

});
