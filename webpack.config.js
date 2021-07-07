const path = require('path');

const ENTRY = path.join(__dirname, 'app-dev', 'index.jsx');
const OUTPUT = path.join(__dirname, 'app-dist');

module.exports = {
  entry: ENTRY,
  output: {
    filename: 'bundle.js',
    path: OUTPUT
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_nodules/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'development'
}