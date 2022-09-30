const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'production',
   entry: {
    index: './src/index.js',
    view: './src/view.js',
    footer: './src/components/Footer.js',
    home: './src/pages/Home.js',
    menu: './src/pages/Menu.js',
    contact: './src/pages/Contact.js',
   },
   devtool: 'inline-source-map',
   plugins: [
    new HtmlWebpackPlugin({
      title: 'The Internet Restaurant',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
 };