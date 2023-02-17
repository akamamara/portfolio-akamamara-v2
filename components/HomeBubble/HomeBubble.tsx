import { css, jsx } from "@emotion/react";

export default function HomeBubble({ zIndex = 0 }) {
	return jsx("div", {
		css: css({
			position: "absolute",
			zIndex: zIndex,
			left: 0,
			top: 0,
			width: "96vw",
			height: "45vw",
			backgroundImage: 'url("/dec-1.svg")',
			backgroundRepeat: "space",
			backgroundSize: "cover",
			backgroundPositionX: "-34vw",
			backgroundPositionY: "-44vw",
		}),
	});
}
