const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack configuration / settings file

module.exports = {
    // Entrypoint of the web app
    entry:'./src/index.js',
    // Output -> The created build/ JS bundle file
    output: {
        // dist folder in the current directory
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    // resolve - the file format we are resolving/transpiling
    
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx']
    },
    // modules: and who resolve it?
    module: {
        rules: [
            {
                // ts and tsx will be first resolved by typescript loader
                test:/\.(ts|tsx)$/,
                exclude:/node-modules|dist|public/,
                use:'ts-loader'
            },
            {
                 // js and jsx will be  resolved by babel preset env and preset-react
                test:/\.(js|jsx)$/,
                exclude:/node-modules|dist|public/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins:[
        // Web plugin to read the index.html file
        // Later we will change something here for multiple point
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ],
    devServer: {
        static: {
            // Read from these files
            directory:path.resolve(__dirname, 'public'),
        },
        historyApiFallback:true,
        port:3000,
        open:true   
    }
}