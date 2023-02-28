/** @jsxImportSource @emotion/react */
import {
	FastArrowRight,
	GitHub,
	Instagram,
	LinkedIn,
	Twitter,
} from "iconoir-react";
import BubbleMid from "../../components/BubbleMid/BubbleMid";
import HomeBubble from "../../components/HomeBubble/HomeBubble";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Typography/Heading/Heading";
import headingCss from "../../components/Typography/Heading/Heading.styles";
import HighlightText from "../../components/Typography/Highlight/Highlight";
import TextBody from "../../components/Typography/TextBody/TextBody";
import homePageCss from "./HomePage.style";
import HomePageGreetings from "./HomePage.Greetings";
import styles from "./HomePage.module.css";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<HomeBubble />
			<BubbleMid />
			<main css={{ width: "68vw" }}>
				<Heading type="h1">
					Hey, I&apos;m
					<HighlightText element="span">
						{" "}
						Aldi Oktaviana Hidayat{"  "}
						<TextBody type="span" css={headingCss.h1}>
							<HighlightText element="b" css={{ margin: "0px 0.1em" }}>
								/
							</HighlightText>
						</TextBody>
						{"  "}
						<span>akamamara</span>
					</HighlightText>
				</Heading>
				<TextBody css={{ marginTop: "1rem" }}>
					Nice to meet you! I&apos;m a
					<HighlightText element="b"> front-end web developer </HighlightText>
					and <HighlightText element="b">UI Designer </HighlightText>
					enthusiast, practicing minimalism, and hard rocking work! ✊🏼
				</TextBody>
				<div>
					<button css={homePageCss.seeMoreProject}>
						<FastArrowRight />
						<TextBody>
							<b>See more my projects</b>
						</TextBody>
					</button>
					<div css={homePageCss.listContact}>
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
			<HomePageGreetings />
		</>
	);
}
