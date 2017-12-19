const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'src/assets'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};