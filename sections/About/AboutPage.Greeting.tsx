import Heading from "../../components/Typography/Heading/Heading";
import { mq } from "../../constants/themes";

export default function AboutPageGreeting() {
	return (
		<Heading
			css={{
				position: "fixed",
				bottom: 0,
				right: "-1vw",
				userSelect: "none",
				zIndex: 100,
				letterSpacing: "-0.06em",
				fontSize: "12vw",
				opacity: 0.06,
				color: "#CCF5A3",
				[mq[0]]: {
					fontSize: "8vw !important",
				},
			}}
		>
			akamamara
		</Heading>
	);
}
