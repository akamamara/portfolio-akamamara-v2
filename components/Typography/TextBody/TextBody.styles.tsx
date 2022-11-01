import { css } from "@emotion/react";
import themes from "../../../constants/themes";

const textBodyCss = {
	self: css({
		fontFamily: "Outfit, sans-serif",
		opacity: 0.75,
		fontSize: "1.25rem",
		color: themes.pallete.white,
		letterSpacing: "0.02em",
	}),
};

export default textBodyCss;
