import { css } from "@emotion/react";
import themes from "../../../constants/themes";

const defaultCss = {
	fontFamily: "Outfit, sans-serif",
	opacity: 0.75,
	fontSize: "1.25rem",
	color: themes.pallete.white,
	letterSpacing: "0.02em",
};

const textBodyCss = {
	default: defaultCss,
	self: css({ ...defaultCss }),
	small: css({ ...defaultCss, fontSize: "1rem" }),
};

export default textBodyCss;
