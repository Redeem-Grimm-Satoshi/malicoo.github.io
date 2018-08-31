module.exports = {
	mode: "production",
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + "/js",
		filename: "main.min.js"
	},
	devServer: {
		contentBase: "./",
		historyApiFallback: true,
		inline: true
	}
}
