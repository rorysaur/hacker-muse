var path = require('path');

module.exports = {
  entry: './js/app.js',

  output: {
    path: __dirname + '/assets',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: path.join(__dirname, 'js'),
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
  }
};

