const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'ngShoppingHost',

  remotes: {
    ngBillingRemote: 'http://localhost:5001/remoteEntry.js',
    ngOrdersRemote: 'http://localhost:5002/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    react: { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
    'react-dom': { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
  },

});
