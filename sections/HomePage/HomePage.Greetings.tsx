import React from "react";
import Heading from "../../components/Typography/Heading/Heading";

const TextData = () => {
	return (
		<span
			style={{
				letterSpacing: "-0.06em",
				fontSize: "13vw",
				opacity: 0.06,
				color: "#25797F",
			}}
		>
			Hello Fellas!
		</span>
	);
};

export default function HomePageGreetings() {
	return (
		<div
			style={{
				position: "absolute",
				bottom: 0,
				left: "-4vw",
				userSelect: "none",
				zIndex: 10,
			}}
		>
			<Heading>
				<TextData />
			</Heading>
		</div>
	);
}
