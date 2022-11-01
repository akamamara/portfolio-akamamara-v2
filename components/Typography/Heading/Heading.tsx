/** @jsxImportSource @emotion/react */
import { css, jsx, SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";
import headingCss from "./Heading.styles";

const elements = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	span: "span",
};

interface HeadingProps {
	type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children: ReactNode;
}

const defaultStyles = headingCss.self;

export default function Heading({
	type = "h1",
	children,
	...props
}: HeadingProps) {
	const typeCss: SerializedStyles = headingCss[type];

	return jsx(
		elements[type] || elements.h1,
		{
			css: css(defaultStyles, typeCss),
			...props,
		},
		children
	);
}
