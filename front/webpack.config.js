module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '../back/public/bundle.js',
    path: __dirname 
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            "@babel/preset-react",
            "@babel/env"
          ]
        }
      }
    ]
  },
  devtool: 'source-map'
}
