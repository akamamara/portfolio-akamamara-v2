import { jsx } from "@emotion/react";
import { ReactNode } from "react";
import highlightCss from "./Highlight.styles";

interface HighlightProps {
	element: "span" | "b" | "strong" | "em" | "i";
	children: ReactNode;
}

export default function HighlightText({
	element = "span",
	children,
	...props
}: HighlightProps) {
	return jsx(
		element,
		{
			css: highlightCss.self,
			...props,
		},
		children
	);
}
