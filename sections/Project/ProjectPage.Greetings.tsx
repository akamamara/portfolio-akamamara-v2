import React from "react";
import Heading from "../../components/Typography/Heading/Heading";

export default function ProjectPageGreetings() {
	return (
		<div
			css={{
				position: "fixed",
				bottom: "9.5rem",
				left: "-13.5rem",
				transform: "rotate(90deg)",
			}}
		>
			<Heading
				css={{
					fontSize: "9.5rem",
					letterSpacing: "-0.06em",
					color: "#CCF5A3",
					opacity: 0.06,
				}}
			>
				Projects
			</Heading>
		</div>
	);
}
