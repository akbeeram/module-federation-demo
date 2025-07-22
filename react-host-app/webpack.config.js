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
            // filename: 'remoteEntry.js',
            remotes: {
                reactRemoteApp: 'reactRemoteApp@http://localhost:5004/remoteEntry.js'
            },
            shared: {
                react: { singleton: true },
                'react-dom': { singleton: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};