import React from "react";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__list}>
				<li className={styles.navbar__item}>
					<a className={styles.navbar__link} href="#">
						Inicio
					</a>
				</li>
				<li className={styles.navbar__item}>
					<a className={styles.navbar__link} href="#">
						Acerca de
					</a>
				</li>
				<li className={styles.navbar__item}>
					<a className={styles.navbar__link} href="#">
						Servicios
					</a>
				</li>
				<li className={styles.navbar__item}>
					<a className={styles.navbar__link} href="#">
						Contacto
					</a>
				</li>
			</ul>
		</nav>
	);
};
