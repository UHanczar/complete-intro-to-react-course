const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/client-app.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    resone: true,
    chenks: false
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     loader: "eslint-loader",
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }
    ]
  }
};