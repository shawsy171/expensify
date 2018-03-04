const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputFile = path.join(__dirname, 'public');


module.exports = (env) => {
  const isProduction = (env === 'production');
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    // entry must be defined in webpack so webpack know with to start
    entry: {
      app: './src/app.jsx',
      // app: './src/playground/higher-order-components.js',
    },

    output: {
      // path must be the absolute path for the output file
      path: outputFile,
      // filename is the name of the file produced by webpack
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    // modules which take rules which can be configured to do tasks
    // e.g. process babel
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      }],
    },
    plugins: [
      CSSExtract,
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: outputFile,
      historyApiFallback: true,
      port: 9000,
    },

  };
};
