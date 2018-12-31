const { resolve } = require('path');
const webpack = require('webpack');

const webpackConfig = {
  entry: {
    bundle: './src/index',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      resolve(__dirname, 'src'),
      resolve(__dirname, 'node_modules'),
    ],
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'scripts/[name].js',
    path: resolve(__dirname, 'devel'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        }]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'devel'),
    publicPath: '/',
    historyApiFallback: true,
    port: 8888,
    inline: true,
    hot: true,
  }
};
  
  module.exports = webpackConfig;
  