const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, 
        use: [
          'style-loader', 
          'css-loader', 
          'postcss-loader', 
          'resolve-url-loader', 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,  
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss', '.sass'], // Adiciona suporte para importação de arquivos SASS/SCSS
  },
  // Outras configurações que você possa ter
};
