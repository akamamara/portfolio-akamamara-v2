const themes = {
	pallete: {
		black: "#262626",
		white: "#FAFAFA",
		primary: {
			main: "#6B993D",
			lighter: "#CCF5A3",
		},
		secondary: {
			main: "#25797F",
			lighter: "#8AD63D",
		},
		title_page: "#30322E",
	},
	border_radius: "0.75rem",
};

const breakpoints = [640, 768, 1024, 1280, 1536];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default themes;

export { themes, mq };
