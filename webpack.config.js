module.exports = {
  entry: './modules/impromptu-animated-header.jsx.js',
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  output: {
    filename: 'main.js',
    libraryTarget: 'commonjs2'
  },
  externals : {
    react: 'react',
    'react-dom': 'react-dom',
    'create-react-class': 'create-react-class'
  }
}