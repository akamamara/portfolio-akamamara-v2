import Link from "next/link";
import React, { useMemo } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
	console.log(styles.nav);
	const menu = useMemo(() => {
		const menuNavbar = ["About", "Projects", "Resume", "Contact"];
		return menuNavbar.map((item) => (
			<Link href={"/" + item} key={item}>
				<li key={item}>{item}</li>
			</Link>
		));
	}, []);

	return (
		<nav className={styles.self}>
			<button type="button" className={styles.logo}>
				akamamara
			</button>
			<div className="flex-grow" />
			<ul className={styles.nav}>{menu}</ul>
		</nav>
	);
}
