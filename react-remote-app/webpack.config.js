const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require('webpack').container;


module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        port: 5004,
        historyApiFallback: true,
    },
    output: {
        filename: 'bundle.js',
        scriptType: 'text/javascript',
        publicPath: 'auto'
    },
    resolve: {
        extensions: ['.ts','.tsx','.js'],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'reactRemoteApp',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactRemoteApp': './src/ReactRemoteApp.tsx'
            },
            shared: {
    react: { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
    'react-dom': { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};