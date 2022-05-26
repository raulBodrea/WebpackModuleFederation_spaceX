const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { config } = require('./config.ts');

const deps = require('./package.json').dependencies;
module.exports = {
  mode: 'development',

  output: {
    publicPath: 'http://localhost:8081/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.svg'],
  },

  devServer: {
    port: 8081,
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
      name: 'content',
      filename: 'remoteEntry.js',
      remotes: {
        marketing: `marketing@${config.marketingBaseUrl}/remoteEntry.js`,
        boneyard: `boneyard@${config.boneyardBaseUrl}/remoteEntry.js`,
        homepage: `homepage@${config.flightsBaseUrl}/remoteEntry.js`,
        flight: `flight@${config.flightBaseUrl}/remoteEntry.js`,
      },
      exposes: { '.': './src/Content.tsx' },
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
