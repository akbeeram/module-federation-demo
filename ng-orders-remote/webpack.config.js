const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'ngOrdersRemote',
  filename: 'remoteEntry.js',
  exposes: {
     './OrdersComponent': './src/app/orders/orders.ts',
   },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
