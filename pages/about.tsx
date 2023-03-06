import dynamic from "next/dynamic";
import React from "react";

const AboutPage = dynamic(
	() => {
		return import("../sections/About/AboutPage");
	},
	{ ssr: false }
);

export default function About() {
	return <AboutPage />;
}
