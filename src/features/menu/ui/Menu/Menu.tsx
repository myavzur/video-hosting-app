import React from "react";

import MenuLink from "../MenuLink";

import { MenuProps } from "./Menu.interface";
import styles from "./Menu.module.scss";

const Menu: React.FC<MenuProps> = ({ links }) => {
	return (
		<ul className={styles.menu}>
			{links.map(link => {
				return (
					<li
						className={styles.menu__link}
						key={link.path}
					>
						<MenuLink link={link} />
					</li>
				);
			})}
		</ul>
	);
};

export default Menu;
