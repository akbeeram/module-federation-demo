const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;


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
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }, {
                test: /\.module\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // <-- enable CSS modules
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
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
                reactHostApp: 'reactHostApp@http://localhost:5005/remoteEntry.js'
            },
            shared: {
                react: { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
                'react-dom': { singleton: true, strictVersion: true, requiredVersion: "^19.1.0" },
                'react-redux': { singleton: true, strictVersion: true },
                '@reduxjs/toolkit': { singleton: true, strictVersion: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};