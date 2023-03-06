import React from "react";
import TextBody from "../../components/Typography/TextBody/TextBody";
import textBodyCss from "../../components/Typography/TextBody/TextBody.styles";

interface Props {
	type: string;
	title: string;
	stack: string;
}

export default function ProjectPageCard({ type, title, stack }: Props) {
	return (
		<div>
			<div
				css={{
					width: "100%",
					height: "11.75rem",
					backgroundColor: "#CACACA",
					borderRadius: "0.75rem",
				}}
			/>
			<div css={{ marginTop: "1rem" }}>
				<TextBody css={{ fontSize: "0.875rem !important" }}>{type}</TextBody>
				<TextBody css={{ color: "#FAFAFA", opacity: 1 }}>
					<b>{title}</b>
				</TextBody>
				<TextBody css={textBodyCss.small}>{stack}</TextBody>
			</div>
		</div>
	);
}
