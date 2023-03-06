import { css } from "@emotion/react";

const helper = {
	topLeftPosition: {
		left: 0,
		top: 0,
	},
};

const aboutPageStyle = {
	mainLandscape: css({
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
	mainPortrait: css([
		helper.topLeftPosition,
		{
			marginTop: "-10rem",
			display: "flex",
			flexGrow: 0,
			alignItems: "center",
			justifyContent: "flex-start",
			maxWidth: "100vw",
			height: "min-content",
		},
	]),
	fixedPosition: css([
		helper.topLeftPosition,
		{
			position: "fixed",
		},
	]),
	absolutePosition: css([helper.topLeftPosition, { position: "absolute" }]),
	pictureSize: {
		width: "47.5vw",
		height: "100vh",
	},
	picturePortrait: {
		width: "100vw",
		height: "26rem",
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
		height: "42vh",
		background:
			"linear-gradient(177.71deg, rgba(38, 38, 38, 0) 5.67%, rgba(38, 38, 38, 0.98) 60%)",
		mixBlendMode: "darken",
		zIndex: 15,
	}),
};

export default aboutPageStyle;
