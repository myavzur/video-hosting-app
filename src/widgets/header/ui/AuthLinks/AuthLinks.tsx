import React from "react";

import { TextLink } from "@/shared/ui";

import styles from "./AuthLinks.module.scss";

const AuthLinks: React.FC = () => {
	return (
		<div className={styles.links}>
			<TextLink
				href="/auth/sign-in"
				kind="secondary"
			>
				Sign In
			</TextLink>

			<TextLink
				href="/auth/sign-up"
				kind="secondary"
			>
				Sign Up
			</TextLink>
		</div>
	);
};

export default AuthLinks;
