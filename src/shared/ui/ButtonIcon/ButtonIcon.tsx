import classNames from "classnames";
import React from "react";

import { ButtonIconProps } from "./ButtonIcon.interface";
import styles from "./ButtonIcon.module.scss";

const ButtonIcon: React.FC<ButtonIconProps> = ({
	hint,
	onClick,
	className,
	children
}) => {
	return (
		<button
			title={hint}
			className={classNames(styles.button, className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default ButtonIcon;
