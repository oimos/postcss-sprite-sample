module.exports = {
	plugins: [
		require('postcss-sprites')({
			stylesheetPath: './',
			spritePath: './img/',
			retina: true
		})
	]
}
