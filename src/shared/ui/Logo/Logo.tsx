import classNames from "classnames";
import Link from "next/link";
import React from "react";

import { BRAND_NAME } from "@/shared/constants/brand.constants";

import HandsUpLogo from "./HandsUpSoft";
import { LogoProps } from "./Logo.interface";
import styles from "./Logo.module.scss";

const Logo: React.FC<LogoProps> = ({ withText, className }) => {
	return (
		<Link href="/">
			<a className={classNames(styles.logo, className)}>
				<div className={styles.logo__svg}>
					<HandsUpLogo />
				</div>

				{withText && <span className={styles.logo__text}>{BRAND_NAME}</span>}
			</a>
		</Link>
	);
};

export default Logo;
