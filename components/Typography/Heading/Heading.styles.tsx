/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import themes, { mq } from "../../../constants/themes";

const headingCss = {
	self: css({
		color: themes.pallete.white,
		fontFamily: `'Purple Purse', cursive`,
		fontWeight: "normal",
	}),
	highlight: css({
		color: themes.pallete.primary.main,
	}),
	h1: css({
		fontSize: "2.5rem",
		lineHeight: "1.2",
		letterSpacing: "-0.01em",
		[mq[0]]: {
			fontSize: "2.75rem",
		},
	}),
	// h2: css({
	// 	fontSize: "2.75rem",
	// }),
	// h3: css({
	// 	fontSize: "2.75rem",
	// }),
	// h4: css({
	// 	fontSize: "2.75rem",
	// }),
	// h5: css({
	// 	fontSize: "2.75rem",
	// }),
	// h6: css({
	// 	fontSize: "2.75rem",
	// }),
};

export default headingCss;
