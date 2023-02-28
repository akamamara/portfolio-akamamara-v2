import { css, jsx } from "@emotion/react";
import { mq } from "../../constants/themes";

export default function BubbleMid({ top = false }) {
	return jsx("div", {
		css: css({
			position: "absolute",
			zIndex: top ? 100 : 0,
			right: "0",
			top: "32vh",
			width: "50vh",
			height: "35vh",
			backgroundPositionX: "20vh",
			backgroundImage: 'url("/dec-1.svg")',
			backgroundRepeat: "space",
			backgroundSize: "contain",
			mixBlendMode: "luminosity",
			rotate: "revert",
			[mq[2]]: {
				top: "20vh",
				width: "50vw",
				height: "35vw",
				backgroundPositionX: "20vw",
			},
		}),
	});
}
