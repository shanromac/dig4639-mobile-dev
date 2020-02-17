const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
<<<<<<< HEAD
    })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
=======
    }),
    ],
    module: {
        rules: [
           {
             test: /\.css$/i,
             use: ['style-loader', 'css-loader']
           }
        ]
    }    
>>>>>>> 46b90aafffc8bfc39bdb4e5bfc9a2298d3dcd03b
};

