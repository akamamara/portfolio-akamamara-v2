/** @jsxImportSource @emotion/react */
import { css as cssEmotion, jsx } from "@emotion/react";
import { ReactNode } from "react";
import textBodyCss from "./TextBody.styles";

interface BodyProps extends JSX.IntrinsicAttributes {
	type?: "p" | "article" | "span" | "b" | "i" | "strong" | "em";
	children: ReactNode;
	css?: any;
}

export default function TextBody({
	type = "p",
	children,
	css,
	...rest
}: BodyProps) {
	return jsx(
		type,
		{
			css: cssEmotion([css, textBodyCss.self]),
			...rest,
		},
		children
	);
}
