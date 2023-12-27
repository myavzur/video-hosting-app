import cn from "classnames";
import Link from "next/link";
import React from "react";

import { TextLinkProps } from "./TextLink.interface";
import styles from "./TextLink.module.scss";

const TextLink: React.FC<TextLinkProps> = ({
	kind = "primary",
	href,
	className,
	children
}) => {
	return (
		<Link href={href}>
			<a
				className={cn(
					styles.link,
					{
						[styles[`link--kind-${kind}`]]: Boolean(kind)
					},
					className
				)}
			>
				{children}
			</a>
		</Link>
	);
};

export default TextLink;
