import { jsx } from "@emotion/react";
import { ReactNode } from "react";
import highlightCss from "./Highlight.styles";

interface HighlightProps {
	children: ReactNode;
}

export default function HighlightText({ children, ...props }: HighlightProps) {
	return jsx(
		"span",
		{
			css: highlightCss.self,
			...props,
		},
		children
	);
}
