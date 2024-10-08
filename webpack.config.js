const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config();
const CopyPlugin = require('copy-webpack-plugin');

const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|json|ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
				type: 'asset/resource',
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: 'public/index.html' }],
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(dotenv.parsed),
		}),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
		alias: {
			// '@': path.resolve(__dirname, 'src'),
		},
	},
};

module.exports = config;
