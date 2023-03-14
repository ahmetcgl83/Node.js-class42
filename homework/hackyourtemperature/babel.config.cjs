module.exports = {
	presets: [
		[
			// This is a configuration for babel
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
	],
};
