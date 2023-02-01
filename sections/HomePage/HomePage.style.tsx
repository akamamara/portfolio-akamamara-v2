/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const homePageCss = {
	seeMoreProject: css({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "0.5rem",
		marginTop: "2rem",
		":hover": {
			textDecoration: "underline",
		},
	}),
	listContact: css({
		display: "flex",
		alignItems: "center",
		marginTop: "1rem",
		gap: "0.5rem",
	}),
};

export default homePageCss;
