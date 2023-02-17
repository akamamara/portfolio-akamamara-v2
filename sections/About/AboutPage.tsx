import BubbleMid from "../../components/BubbleMid/BubbleMid";
import HomeBubble from "../../components/HomeBubble/HomeBubble";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Typography/Heading/Heading";
import HighlightText from "../../components/Typography/Highlight/Highlight";
import TextBody from "../../components/Typography/TextBody/TextBody";
import AboutPageDetails from "./AboutPage.Details";
import AboutPageGreeting from "./AboutPage.Greeting";
import aboutPageStyle from "./AboutPage.style";

export default function AboutPage() {
	return (
		<>
			<Navbar />
			<BubbleMid />
			<AboutPageGreeting />
			<main css={aboutPageStyle.main}>
				<div>
					<div
						css={[
							aboutPageStyle.overlayAboutMe,
							aboutPageStyle.fixedPosition,
							aboutPageStyle.pictureSize,
						]}
					/>
					<picture css={aboutPageStyle.fixedPosition}>
						<source
							css={[aboutPageStyle.imgFit, aboutPageStyle.pictureSize]}
							src="/aldi-oktaviana.jpg"
							type="image/jpeg"
						/>
						<source
							css={[aboutPageStyle.imgFit, aboutPageStyle.pictureSize]}
							src="/aldi-oktaviana.webp"
							type="image/webp"
						/>
						<img
							css={[aboutPageStyle.imgFit, aboutPageStyle.pictureSize]}
							src="/aldi-oktaviana.webp"
							alt="Portrait of Aldi Oktaviana Hidayat"
						/>
					</picture>
				</div>
				<div css={{ zIndex: 10 }}>
					<div>
						<TextBody>Hello, folks! We meet again.</TextBody>
						<Heading>
							This is my <HighlightText element="span">...storia</HighlightText>
						</Heading>
					</div>
					<div
						css={{
							marginTop: "4.25rem",
							paddingBottom: "20vh",
						}}
					>
						{Array(4)
							.fill(undefined)
							.map((_, index) => (
								<AboutPageDetails title="UI/UX Design" key={index}>
									I started my journey in UI Design in my early college year.
									It’s a fun field and challenging because a good understanding
									of user needs and behavior is a must key to mastering and that
									is not my major experience. A nice design is important indeed,
									but when no one understands how to use it, it is waste of
									time. Thanks to this field, I can emphasize what users wanted
									and need in a software.
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
					<div css={aboutPageStyle.overlayDescriptionTop} />
					<div css={aboutPageStyle.overlayDescription} />
				</div>
			</main>
		</>
	);
}
