const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require('webpack').container;


module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        port: 5005,
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
            name: 'reactHostApp',
            filename: 'remoteEntry.js',
            remotes: {
                reactRemoteApp: 'reactRemoteApp@http://localhost:5004/remoteEntry.js'
            },
            exposes: {
                './store': './src/store.ts',
            },
            shared: {
                react: { singleton: true },
                'react-dom': { singleton: true },
                'react-redux': { singleton: true, strictVersion: true },
                redux: { singleton: true, strictVersion: true },
                '@reduxjs/toolkit': { singleton: true, strictVersion: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};