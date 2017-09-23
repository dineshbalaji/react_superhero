/*
* Package.json
* "babel-plugin-react-html-attrs": "^2.0.0", // plugins used for change class to className & for as htmlFor
* "babel-plugin-transform-decorators-legacy": "^1.3.4", // ES7 decorator implementation
* */

/*
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: null,
  entry: "./bootstrap.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties'/!*, 'transform-decorators-legacy'*!/],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "main.min.js"
  }
};
*/

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var _root = path.resolve(__dirname, '.');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
module.exports = {
  
  entry: {
    'app': './src//bootstrap.js'
  },
  
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  output: {
    path: root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  
  
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties'/*, 'transform-decorators-legacy'*/],
        }
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  
  
  ],
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};