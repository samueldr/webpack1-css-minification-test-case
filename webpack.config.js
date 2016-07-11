/* global module __dirname require */

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
	entry:  {
		app:  "./js/app.js",
	},
	output: {
		path:     __dirname + "out/",
		filename: "/[name].js",
	},
	module: {
		loaders: [
			{
				test:    /\.css$/,
				exclude: /node_modules/,
				loader:  ExtractTextPlugin.extract([
					"css",
					//
					// Uncomment this to disable postcss-minify-font-values,
					// as suggested by @Kovensky
					// https://github.com/webpack/webpack/issues/2752#issuecomment-231566968
					// "?minifyFontValues=false",
					//
					// Uncomment to disable css-loader's minification.
					// "?-minimize",
				].join("")),
			},
		]
	},
	plugins: [
		new ExtractTextPlugin("styles.css", {disable: false, allChunks: true}),
		// Alternatively comment this out to disable UglifyJS' minification.
		new webpack.optimize.UglifyJsPlugin(),
	],
};
