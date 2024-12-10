
module.exports = {
	
	trailingSlash: "never",

	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-no-sourcemaps",
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/assets/icon.png",
				display: "minimal-ui",
				start_url: "/",
				short_name: "Ruba",
				name: "Cuenta con Ruba",
				background_color: "#FFFFFF",
				theme_color: "#181818",
			},
		},
		{
			resolve: "gatsby-plugin-remove-console",
			options: {
				exclude: ["error", "info", "warn"],
			},
		},
	],
};
