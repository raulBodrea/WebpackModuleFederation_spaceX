const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = {
  mode: 'development',

  output: {
    publicPath: 'http://localhost:8082/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.svg'],
  },

  devServer: {
    port: 8082,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        type: 'asset/inline',
      },
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'boneyard',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Box': './src/components/box/Box.tsx',
        './Text': './src/components/text/Text.tsx',
        './Button': './src/components/button/Button.tsx',
        './theme': './src/components/theme.ts',
        './logo': './public/logo.svg',
        '.': './src/components/index.ts',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
