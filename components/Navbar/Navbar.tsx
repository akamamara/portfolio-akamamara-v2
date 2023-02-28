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
		const menuNavbar = ["About", "Projects", "Resume", "Contact"];
		return menuNavbar.map((item) => (
			<Link href={"/" + item.toLowerCase()} key={item}>
				<li key={item}>{item}</li>
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
