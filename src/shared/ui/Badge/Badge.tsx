import classNames from "classnames";
import React from "react";

import { BadgeProps } from "./Badge.interface";
import styles from "./Badge.module.scss";

const Badge: React.FC<BadgeProps> = ({ icon: Icon, label, className }) => {
	return (
		<div className={classNames(styles.badge, className)}>
			<Icon className={styles.badge__icon} />

			<p className={styles.badge__label}>{label}</p>
		</div>
	);
};

export default Badge;
