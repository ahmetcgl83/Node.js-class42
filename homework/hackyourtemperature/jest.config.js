export default {
	// Jest will transform any file with 2 dots and ending with either js/jsx
	transform: {
		"^.+\\.jsx?$": "babel-jest",
	},
	// This ensures that Jest transforms 'node_modules' too
	transformIgnorePatterns: [],
};
