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
            remotes: {
                reactHostApp: 'reactHostApp@http://localhost:5005/remoteEntry.js',
            },
            shared: {
                react: { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
                'react-dom': { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
                'react-redux': { singleton: true, requiredVersion: '^9.0.0' },
                redux: { singleton: true, requiredVersion: '^5.0.0' },
                '@reduxjs/toolkit': { singleton: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};