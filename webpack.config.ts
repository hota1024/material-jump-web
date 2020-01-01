import { Configuration, Plugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import * as path from 'path'

const config: Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '.')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './html/index.html')
    }),
    new TsConfigPathsPlugin()
  ] as Plugin[],
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  }
}

export default config
