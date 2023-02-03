/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Image from "next/image";
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
			<ProjectPageGreetings />
			<main
				css={{ position: "relative", width: "80vw", paddingBottom: "10vh" }}
			>
				<div css={{ marginTop: "10vh", marginBottom: "1.25rem" }}>
					<TextBody css={[textBodyCss.small, { opacity: 0.6 }]}>
						My Journey, so far…
					</TextBody>
					<Heading>My Projects</Heading>
				</div>

				<TextBody css={[textBodyCss.small, { opacity: 0.6 }]}>
					Fetured projects
				</TextBody>
				<div
					css={{
						marginTop: "1rem",
						position: "relative",
						width: "80vw",
					}}
				>
					<Image
						src="/showcase/famlink-logo.png"
						alt="FamLink Logo"
						css={{
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: 50,
							width: "6rem",
						}}
						width={96}
						height={96}
					/>
					<Image
						css={{
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: 30,
							width: "55vw",
							mixBlendMode: "luminosity",
							opacity: 0.6,
						}}
						src="/showcase/overlay-projects.svg"
						alt=""
						width={96}
						height={96}
					/>
					<picture>
						<source src="/showcase/famlink-projects.png" type="image/png" />
						<source
							css={{
								width: "55vw",
								mixBlendMode: "luminosity",
							}}
							src="/showcase/famlink-projects.webp"
							type="image/webp"
						/>
						<img
							css={{
								width: "55vw",
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

				{/* <div>
					<TextBody css={textBodyCss.small} css={{ opacity: 0.6 }}>
						Scroll for
						<br />
						more projects
					</TextBody>
				</div> */}

				<div css={{ marginTop: "10vh", marginBottom: "3rem" }}>
					<TextBody css={{ opacity: 1 }} type="b">
						The Rest of it...
					</TextBody>
					<div css={{ display: "flex", marginTop: "0.5rem" }}>
						<TextBody
							css={[textBodyCss.small, { opacity: 0.6, marginRight: "3rem" }]}
						>
							Filter By
						</TextBody>
						<div css={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
							{[
								"All",
								"Web Development",
								"UI/UX Design",
								"Mobile Development",
							].map((item) => (
								<TextBody
									css={[textBodyCss.small, { opacity: 0.6 }]}
									key={item}
								>
									{`${item} (xx)`}
								</TextBody>
							))}
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
			</main>
		</>
	);
}
