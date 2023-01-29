import { css, jsx } from "@emotion/react";

export default function BubbleMid() {
	return jsx("div", {
		css: css({
			position: "absolute",
			zIndex: 0,
			right: "0",
			top: "20vh",
			width: "50vw",
			height: "35vw",
			backgroundImage: 'url("/dec-1.svg")',
			backgroundRepeat: "space",
			backgroundSize: "contain",
			backgroundPositionX: "20vw",
			backgroundPositionY: "0",
			rotate: "revert",
		}),
	});
}
