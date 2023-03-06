import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import Heading from "../../components/Typography/Heading/Heading";
import TextBody from "../../components/Typography/TextBody/TextBody";

export default function AboutPageDetails({
	title,
	children,
	...rest
}: {
	title: string;
	children: ReactNode;
} & JSX.IntrinsicAttributes) {
	return (
		<div
			css={{
				position: "relative",
				padding: "0 3rem",
				paddingBottom: "2.75rem",
				"::after": {
					content: '""',
					position: "absolute",
					width: "0.375rem",
					backgroundColor: "white",
					top: 0,
					bottom: 0,
					left: ".75rem",
				},
			}}
			{...rest}
		>
			<div
				css={{
					"::after": {
						content: '""',
						position: "absolute",
						width: "1.83rem",
						height: "1.83rem",
						left: "0.02rem",
						top: 0,
						backgroundColor: "#323232",
						border: "6px solid white",
						borderRadius: "50%",
						zIndex: 1,
					},
				}}
			>
				<Heading
					css={{
						position: "relative",
						top: -4,
						fontSize: "1.83rem !important",
					}}
				>
					{title}
				</Heading>
				<TextBody css={{ marginTop: "0.375rem" }}>{children}</TextBody>
			</div>
		</div>
	);
}
