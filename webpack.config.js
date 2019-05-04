const path = require('path');
const HWP = require('html-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, './');
const SRC_DIR = `${ROOT_DIR}/src`;
const BUILD_DIR = `${ROOT_DIR}/build`;

const isDebug = process.argv.includes('development');
const isVerbose = process.argv.includes('--verbose');


module.exports = {
  entry: path.join(__dirname, '/src/index.js'),

  output: {
      pathinfo: isVerbose,
      filename: isDebug ? '[name].js' : '[name].[hash:8].js',
      path: path.join(__dirname, '/build'),
      // Point sourcemap entries to original disk location (format as URL on Windows)
      devtoolModuleFilenameTemplate: info =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  module:{
    rules:[{
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader'
    }]
  },
  plugins:[
      new HWP(
         {template: path.join(__dirname,'/src/index.html')}
      )
  ]
}
