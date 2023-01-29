/** @jsxImportSource @emotion/react */

import {
	FastArrowRight,
	GitHub,
	Instagram,
	LinkedIn,
	Twitter,
} from "iconoir-react";
import BubbleMid from "../components/BubbleMid/BubbleMid";
import HomeBubble from "../components/HomeBubble/HomeBubble";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Typography/Heading/Heading";
import headingCss from "../components/Typography/Heading/Heading.styles";
import HighlightText from "../components/Typography/Highlight/Highlight";
import TextBody from "../components/Typography/TextBody/TextBody";
import themes from "../constants/themes";
import HomePageGreetings from "../sections/HomePage/HomePage.Greetings";

export default function Home() {
	return (
		<>
			<Navbar />
			<HomeBubble />
			<BubbleMid />
			<div className="flex-grow" />
			<main>
				<Heading type="h1">
					Hey, I&apos;m
					<HighlightText>
						{" "}
						Aldi Oktaviana Hidayat{"  "}
						<TextBody type="span" css={headingCss.h1}>
							<HighlightText css={{ margin: "0px 0.1em" }}>
								<b> / </b>
							</HighlightText>
						</TextBody>
						{"  "}
						<span className="tracking-[0.04em]">akamamara</span>
					</HighlightText>
				</Heading>
				<TextBody className="-mt-2">
					Nice to meet you! I&apos;m a{" "}
					<HighlightText>
						<b>front-end web developer</b>
					</HighlightText>{" "}
					and{" "}
					<HighlightText>
						<b>UI Designer </b>
					</HighlightText>
					enthusiast, practicing minimalism, and hard rocking work! ✊🏼
				</TextBody>
				<div className="mt-8">
					<button className="flex flex-row items-center space-x-2">
						<FastArrowRight className="text-[#FAFAFA] opacity-75" />
						<TextBody className="hover:underline">
							<b>See more my projects</b>
						</TextBody>
					</button>
					<div className="flex flex-row items-center text-[#FAFAFA] opacity-75 space-x-3 mt-4">
						<button>
							<Twitter />
						</button>
						<button>
							<Instagram />
						</button>
						<button>
							<LinkedIn />
						</button>
						<button>
							<GitHub />
						</button>
					</div>
				</div>
			</main>
			<div className="flex-grow" />
		</>
	);
}
