var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    // YOU NEED TO SET libraryTarget: 'commonjs2'
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss'
    }, {
      test: /\.(png|jpg)$/,
      exclude: /node_modules/,
      loader: 'url-loader?name=images/[name].[ext]&limit=8192'
    }],
  },
  resolve: {
    root: path.join(__dirname, '..', 'app'),
    extensions: ['', '.js', '.jsx', '.json', '.css', '.styl', '.png', '.jpg', '.jpeg', '.gif']
  },
  postcss: function () {
    return [autoprefixer];
  }
};
