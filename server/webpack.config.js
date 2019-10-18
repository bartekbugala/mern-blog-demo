const path = require('path');
const webpack = require('webpack');
const pluginContextRep = new webpack.ContextReplacementPlugin(/.*/);
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  watch: true,
  entry: {
    app: ['./server.js']
  },
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'bundle-server.js'
  },
  externals: [nodeExternals()],
  plugins: [pluginContextRep]
};
