import { css } from "@emotion/react";
import themes from "../../../constants/themes";
import { mq } from "../../../constants/themes";

const defaultCss = {
	fontFamily: "Outfit, sans-serif",
	opacity: 0.75,
	fontSize: "1rem",
	color: themes.pallete.white,
	letterSpacing: "0.02em",
	[mq[0]]: {
		fontSize: "1.25rem",
	},
};

const textBodyCss = {
	default: defaultCss,
	self: css({ ...defaultCss }),
	small: css([defaultCss, { fontSize: "1rem !important" }]),
};

export default textBodyCss;
