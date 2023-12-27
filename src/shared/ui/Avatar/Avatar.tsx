import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { GiFalling } from "react-icons/gi";

import { AvatarProps } from "./Avatar.interface";
import styles from "./Avatar.module.scss";

const Avatar: React.FC<AvatarProps> = ({ src, alt, size, className }) => {
	return (
		<div
			className={classNames(
				styles.avatar,
				{
					[styles[`avatar--size-${size}`]]: Boolean(size)
				},
				className
			)}
		>
			{src ? (
				<Image
					className={styles.avatar__image}
					src={src}
					alt={alt}
					layout="fill"
				/>
			) : (
				<GiFalling className={styles.avatar__placeholder} />
			)}
		</div>
	);
};

export default Avatar;
