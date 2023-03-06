import React from "react";
import Heading from "../../components/Typography/Heading/Heading";
import { mq } from "../../constants/themes";

export default function ProjectPageGreetings() {
	return (
		<div
			css={{
				position: "fixed",
				bottom: "9.5rem",
				left: "-11.5rem",
				transform: "rotate(90deg)",
				zIndex: 50,

				[mq[2]]: {
					bottom: "9.5rem",
					left: "-13.5rem",
				},
			}}
		>
			<Heading
				css={{
					"&&": {
						fontSize: "8rem",
						letterSpacing: "-0.06em",
						color: "#CCF5A3",
						opacity: 0.06,
						[mq[2]]: {
							fontSize: "9.5rem",
						},
					},
				}}
			>
				Projects
			</Heading>
		</div>
	);
}
