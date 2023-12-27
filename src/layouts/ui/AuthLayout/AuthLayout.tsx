import Head from "next/head";
import React from "react";

import { VideoCardLarge } from "@/entities/video";

import { AuthLayoutProps } from "./AuthLayout.interface";
import styles from "./AuthLayout.module.scss";

const AuthLayout: React.FC<AuthLayoutProps> = ({ video, meta, children }) => {
	return (
		<React.Fragment>
			<Head>
				<title>{meta.title}</title>
				<meta
					name="description"
					content={meta.description}
				/>
			</Head>

			<div className={styles.layout}>
				<main className={styles.layout__content}>{children}</main>

				{video?.id && (
					<aside className={styles.layout__video}>
						<VideoCardLarge
							video={video}
							preset="authorization-screen"
						/>
						<div className={styles["layout__video-overlay"]} />
					</aside>
				)}
			</div>
		</React.Fragment>
	);
};

export default AuthLayout;
