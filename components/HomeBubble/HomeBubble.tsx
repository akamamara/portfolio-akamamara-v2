import { css, jsx } from "@emotion/react";
import { mq } from "../../constants/themes";

export default function HomeBubble({ zIndex = 0 }) {
	return jsx("div", {
		css: css({
			position: "absolute",
			zIndex: zIndex,
			left: 0,
			top: 0,
			width: "96vh",
			height: "45vh",
			backgroundPositionX: "-34vh",
			backgroundPositionY: "-44vh",
			backgroundImage: 'url("/dec-1.svg")',
			backgroundRepeat: "space",
			backgroundSize: "cover",
			[mq[0]]: {
				width: "96vw",
				height: "45vw",
				backgroundPositionX: "-34vw",
				backgroundPositionY: "-44vw",
			},
		}),
	});
}
