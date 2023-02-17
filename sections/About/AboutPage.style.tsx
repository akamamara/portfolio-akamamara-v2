import { css } from "@emotion/react";

const aboutPageStyle = {
	main: css({
		position: "relative",
		right: "-25%",
		top: 0,
		display: "flex",
		flexGrow: 0,
		alignItems: "flex-start",
		justifyContent: "flex-start",
		padding: "24vh 1rem 0 2rem",
		width: "100%",
		maxWidth: "50vw",
	}),
	fixedPosition: {
		position: "fixed",
		left: 0,
		top: 0,
	},
	pictureSize: {
		width: "47.5vw",
		height: "100vh",
	},
	overlayAboutMe: css({
		zIndex: 5,
		background:
			"linear-gradient(270deg, #262626 1.06%, rgba(38, 38, 38, 0) 71.22%)",
	}),
	imgFit: css({
		objectFit: "cover",
	}),
	overlayDescription: css({
		position: "fixed",
		bottom: 0,
		right: 0,
		width: "52%",
		height: "42vh",
		background:
			"linear-gradient(177.71deg, rgba(38, 38, 38, 0) 5.67%, rgba(38, 38, 38, 0.98) 60%)",
		mixBlendMode: "darken",
		zIndex: 15,
	}),
};

export default aboutPageStyle;
