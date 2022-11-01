/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { ReactNode } from "react";
import textBodyCss from "./TextBody.styles";

const element = {
	p: "p",
	article: "article",
	span: "span",
};

interface BodyProps {
	type?: "p" | "article" | "span";
	children: ReactNode;
}

export default function TextBody({
	type = "p",
	children,
	...rest
}: BodyProps & JSX.IntrinsicAttributes) {
	return jsx(
		element[type],
		{
			css: textBodyCss.self,
			...rest,
		},
		children
	);
}
