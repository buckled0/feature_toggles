const { environment } = require('@rails/webpacker')

environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader',
  options: {
    attempts: 1
  }
});

module: {
  rules: [
    {
      test: /\.js(\.erb)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { modules: false }]
        ]
      }
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'sass-loader']
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
}

module.exports = environment
