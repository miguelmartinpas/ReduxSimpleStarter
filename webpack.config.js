module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
        /*query: {
          presets: ['react', 'es2015', 'stage-1']
        }*/
      },
      {
        exclude: /node_modules/,
        test: /\.[js|jsx]$/,
        use: [
          'react-hot-loader',
          'babel-loader'
        ]
     },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({ browsers: 'last 2 versions' })
              ]
            }
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true }
          }]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
