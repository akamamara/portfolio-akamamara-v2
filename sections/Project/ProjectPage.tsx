/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import BubbleMid from "../../components/BubbleMid/BubbleMid";
import HomeBubble from "../../components/HomeBubble/HomeBubble";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Typography/Heading/Heading";
import TextBody from "../../components/Typography/TextBody/TextBody";
import textBodyCss from "../../components/Typography/TextBody/TextBody.styles";
import ProjectPageCard from "./ProjectPage.Card";
import ProjectPageGreetings from "./ProjectPage.Greetings";

export default function ProjectPage() {
	return (
		<>
			<Navbar />
			<HomeBubble />
			<BubbleMid top />
			<main css={{ paddingTop: "10vh", width: "80vw" }}>
				<ProjectPageGreetings />
				<TextBody css={[textBodyCss.small, { opacity: 0.6 }]}>
					My Journey, so far…
				</TextBody>
				<Heading>My Projects</Heading>
				<TextBody
					css={[textBodyCss.small, { opacity: 0.6, marginTop: "1.25rem" }]}
				>
					Fetured projects
				</TextBody>
				<div
					css={{
						marginTop: "1rem",
						position: "relative",
						width: "80vw",
					}}
				>
					<img
						src="/showcase/famlink-logo.png"
						alt="FamLink Logo"
						css={{
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: 50,
							width: "6rem",
						}}
					/>
					<img
						css={{
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: 30,
							width: "60vw",
							mixBlendMode: "luminosity",
							opacity: 0.6,
						}}
						src="/showcase/overlay-projects.svg"
						alt=""
					/>
					<picture>
						<source src="/showcase/famlink-projects.png" type="image/png" />
						<source
							css={{
								width: "60vw",
								mixBlendMode: "luminosity",
							}}
							src="/showcase/famlink-projects.webp"
							type="image/webp"
						/>
						<img
							css={{
								width: "60vw",
								mixBlendMode: "luminosity",
							}}
							src="/showcase/famlink-projects.webp"
							alt="Portrait of Aldi Oktaviana Hidayat"
						/>
					</picture>

					<div
						css={{
							width: "26rem",
							position: "absolute",
							right: 0,
							bottom: "6vw",
							zIndex: 150,
						}}
					>
						<TextBody css={{ opacity: 0.6 }}>
							Deployed new <b>three</b> module education, consultation, and
							stakeholder forum for FamLink, platform that focus on family
							development in Indonesia.
						</TextBody>
						<div css={{ marginTop: "2.5rem" }}>
							<TextBody css={[textBodyCss.small, { opacity: 0.6 }]} type="b">
								Key values:
							</TextBody>
							<ul>
								<li>
									<TextBody css={[textBodyCss.small, { opacity: 0.6 }]}>
										• Develop using android native with Kotlin
									</TextBody>
								</li>
								<li>
									<TextBody css={[textBodyCss.small, { opacity: 0.6 }]}>
										• Succeeded to gain installed apps from 800 devices up to
										950 devices per education module deployed.
									</TextBody>
								</li>
								<li>
									<TextBody css={[textBodyCss.small, { opacity: 0.6 }]}>
										• Develop new feature admin dashboard for consultation and
										stakeholder using Laravel and jQuery.
									</TextBody>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(5, 1fr)",
						rowGap: "3rem",
						columnGap: "1.25rem",
					}}
				>
					{Array.from({ length: 10 })
						.fill({
							type: "Web Development",
							title: "GODATA IPB",
							stack: "Svelte, Tailwind",
						})
						.map((val, i) => {
							return (
								<ProjectPageCard
									type={val.type}
									title={val.title}
									stack={val.stack}
									key={i}
								/>
							);
						})}
				</div>

				{/* <div>
					<TextBody css={textBodyCss.small} css={{ opacity: 0.6 }}>
						Scroll for
						<br />
						more projects
					</TextBody>
				</div> */}
			</main>
		</>
	);
}
