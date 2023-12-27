import cn from "classnames";
import React from "react";

import { ButtonProps } from "./Button.interface";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
	className,
	onClick,
	hint,
	kind,
	icon: Icon,
	size,
	isActive,
	children,
	...buttonAttributes
}) => {
	return (
		<button
			{...buttonAttributes}
			className={cn(
				styles.button,
				{
					[styles["button--active"]]: isActive,
					[styles[`button--color-${kind}`]]: Boolean(kind),
					[styles[`button--size-${size}`]]: Boolean(size)
				},
				className
			)}
			onClick={onClick}
			title={hint}
		>
			{Icon && <Icon className={styles.button__icon} />}

			{children}
		</button>
	);
};

export default Button;
