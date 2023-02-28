import React from "react";
import Heading from "../../components/Typography/Heading/Heading";
import { mq } from "../../constants/themes";

const TextData = () => {
	return (
		<span
			css={{
				letterSpacing: "-0.06em",
				fontSize: "18vw",
				opacity: 0.06,
				color: "#25797F",
				[mq[0]]: {
					fontSize: "13vw",
				},
			}}
		>
			Hello Fellas!
		</span>
	);
};

export default function HomePageGreetings() {
	return (
		<div
			css={{
				position: "absolute",
				bottom: "20vh",
				left: "-4vw",
				userSelect: "none",
				zIndex: 0,
				[mq[1]]: {
					bottom: "1vh",
					fontSize: "13vw",
				},
			}}
		>
			<Heading>
				<TextData />
			</Heading>
		</div>
	);
}
