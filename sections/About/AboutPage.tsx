import { useState, useEffect } from "react";
import BubbleMid from "../../components/BubbleMid/BubbleMid";
import HomeBubble from "../../components/HomeBubble/HomeBubble";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Typography/Heading/Heading";
import HighlightText from "../../components/Typography/Highlight/Highlight";
import TextBody from "../../components/Typography/TextBody/TextBody";
import useWindowDimensions from "../../helper/useWindowDimensions";
import AboutPageDetails from "./AboutPage.Details";
import AboutPageGreeting from "./AboutPage.Greeting";
import aboutPageStyle from "./AboutPage.style";
import aboutMeDescription from "../../data/aboutMeDescription";

export default function AboutPage() {
	const { width, height } = useWindowDimensions();
	const [isPortrait, setIsPortrait] = useState(height > width);

	useEffect(() => {
		setIsPortrait(height > width);
		console.log("screenSize", width, height);
	}, [width, height]);

	return (
		<>
			<Navbar />
			<BubbleMid />
			<AboutPageGreeting />
			<main
				css={
					isPortrait
						? aboutPageStyle.mainPortrait
						: aboutPageStyle.mainLandscape
				}
			>
				<div css={{ position: "relative" }}>
					<div
						css={[
							aboutPageStyle.overlayAboutMe,
							isPortrait
								? aboutPageStyle.absolutePosition
								: aboutPageStyle.fixedPosition,
							isPortrait
								? aboutPageStyle.picturePortrait
								: aboutPageStyle.pictureSize,
						]}
					/>
					<picture css={isPortrait ? {} : aboutPageStyle.fixedPosition}>
						<source
							css={[
								aboutPageStyle.imgFit,
								isPortrait
									? aboutPageStyle.picturePortrait
									: aboutPageStyle.pictureSize,
							]}
							src="/aldi-oktaviana.jpg"
							type="image/jpeg"
						/>
						<source
							css={[
								aboutPageStyle.imgFit,
								isPortrait
									? aboutPageStyle.picturePortrait
									: aboutPageStyle.pictureSize,
							]}
							src="/aldi-oktaviana.webp"
							type="image/webp"
						/>
						<img
							css={[
								aboutPageStyle.imgFit,
								isPortrait
									? aboutPageStyle.picturePortrait
									: aboutPageStyle.pictureSize,
							]}
							src="/aldi-oktaviana.webp"
							alt="Portrait of Aldi Oktaviana Hidayat"
						/>
					</picture>
				</div>
				<div
					css={[
						isPortrait ? { padding: "3rem 2vw 3rem 6vw" } : {},
						{ zIndex: 10 },
					]}
				>
					<div>
						<TextBody>Hello, folks! We meet again.</TextBody>
						<Heading>
							This is my <HighlightText element="span">...storia</HighlightText>
						</Heading>
					</div>
					<div
						css={{
							marginTop: "4.25rem",
							paddingBottom: isPortrait ? "8vh" : "20vh",
						}}
					>
						{aboutMeDescription.map((item, index) => (
							<AboutPageDetails title={item.title} key={index}>
								{item.description}
							</AboutPageDetails>
						))}
						<AboutPageDetails title="What Else?">
							<ul css={{ listStyleType: "disc", marginLeft: "1rem" }}>
								<li css={{ marginBottom: "0.5rem" }}>
									Honored as Recipient of Funding Program Kreatifitas Mahasiswa
									(PKM) Skema PKMK, Issued by Kementerian Pendidikan,
									Kebudayaan, Riset, dan Teknologi Direktorat Jenderal
									Pendidikan Tinggi, Riset, dan Teknologi (Oct 2021)
								</li>
								<li css={{ marginBottom: "0.5rem" }}>
									Volunteering at a technology event based in my department,
									Computer Science. I’ve honored to be a Head of the Creative
									Division in IT Today IPB 2020 and as Chairman of IPB Web
									Development Community (2019-2020)
								</li>
								<li css={{ marginBottom: "0.5rem" }}>
									Used to tinkering my software device in my spare time, like
									flashing new ROM, new OS, and new software. Just for fun.
								</li>
							</ul>
						</AboutPageDetails>
					</div>
					<div
						css={[
							{ width: isPortrait ? "100%" : "52%" },
							aboutPageStyle.overlayDescription,
						]}
					/>
				</div>
			</main>
		</>
	);
}
