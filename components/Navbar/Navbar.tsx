import { MenuScale } from "iconoir-react";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
	const [menuClicked, setMenuClicked] = useState(false);
	const [menuClasses, setMenuClasses] = useState(
		`hidden md:block ${styles.nav}`
	);
	useEffect(() => {
		if (menuClicked)
			setMenuClasses(
				`absolute top-0 right-0 flex flex-col sm:flex-row sm:relative ${styles.nav}`
			);
		else setMenuClasses(`hidden sm:flex flex-col sm:flex-row ${styles.nav}`);
	}, [menuClicked]);

	const menu = useMemo(() => {
		const menuNavbar = [
			{ name: "About", link: "/about" },
			{ name: "Projects", link: "/projects" },
			{
				name: "Resume",
				link: "https://drive.google.com/file/d/1_SEuk7wVw4jJB_XTv79pmRj15YCqfsfQ/view?usp=sharing",
			},
			{
				name: "Contact",
				link: "mailto:aldiokta10@hotmail.co.id?subject=Contact from Portfolio",
			},
		];
		return menuNavbar.map((item) => (
			<Link href={item.link} key={item.name}>
				<li key={item.name}>{item.name}</li>
			</Link>
		));
	}, []);

	const onClickMenu = () => setMenuClicked(!menuClicked);

	return (
		<nav className={styles.self}>
			<Link className={styles.logo} href="/">
				akamamara
			</Link>
			<div className="flex-grow" />
			<button onClick={onClickMenu} className="z-50 sm:hidden">
				<MenuScale style={{ transform: "matrix(1, 0, 0, -1, 0, 0)" }} />
			</button>
			<ul className={menuClasses}>{menu}</ul>
		</nav>
	);
}
