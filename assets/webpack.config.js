const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== 'production';


module.exports = (env, options) => ({

  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: true }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: {
      app: ['./js/app.js'],//.concat(glob.sync('./vendor/**/*.js')),
      //accounts: ['./js/accounts.js'],
      style: ['./scss/style.scss'],
      //main: ['./css/main.css'],
      vendor: ['babel-polyfill', 'react', 'react-dom', 'jquery', 'popper.js'],
  },
  devtool: 'source-map',
  //mode: 'production',
  output: {
    filename: '[name].js',
    //path: path.resolve(__dirname, '../priv/static/js')
    path: path.resolve(__dirname, '../static/js'),
    //chunkFilename: '[name].[chunkhash].bundle.js',
    //publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          //options: {
          //  sourceMap: true
          //}
        }
      },
      {
        test: [/.css$|.scss$/],
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].css',
                /*context: './',*/
                outputPath: '../css',
                /*publicPath: '/css'*/
            }
        },
            {
                loader: 'extract-loader'
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../fonts/'
            }
          }
        ]
      },
      {
        test: /\.(gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].css',
        //chunkFilename: devMode ? '[id].css' : '[id].css',
    }),
    /*
    new CopyWebpackPlugin([
      {
        from: 'node_modules/slick-carousel/slick/ajax-loader.gif',
        to: '../../assets/scss/',
        force: true,
      },
    ]),*/

    //new MiniCssExtractPlugin({ filename: '../assets/plugins/bootstrap/css/bootstrap.css' }),
    //new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
    //new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
    new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
    })
  ],
  /*optimization: {
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'initial',
                enforce: true,
                //chunks: 'all'
            }
        }
    }
  }*/
  watch: devMode ? true : false
});
