import { animated, useTransition } from "@react-spring/web";
import Head from "next/head";
import React, { useCallback, useState } from "react";

import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

import { DefaultLayoutProps } from "../../interfaces/DefaultLayout.interface";

import styles from "./MainLayout.module.scss";

const MainLayout: React.FC<DefaultLayoutProps> = ({ meta, children }) => {
	const [isSidebarActive, setSidebarActive] = useState(false);
	const sidebarTransition = useTransition(isSidebarActive, {
		from: { transform: "translateX(-100%)" },
		enter: { transform: "translateX(0%)" },
		leave: { transform: "translateX(-100%)" }
	});
	const overlayTransition = useTransition(isSidebarActive, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 }
	});

	const handleOpenSidebar = useCallback(
		() => setSidebarActive(true),
		[setSidebarActive]
	);
	const handleCloseSidebar = useCallback(
		() => setSidebarActive(false),
		[setSidebarActive]
	);

	return (
		<React.Fragment>
			<Head>
				<title>{meta.title}</title>

				{meta.description ? (
					<React.Fragment>
						<meta
							name="description"
							content={meta.description}
						/>
						<meta
							name="og:title"
							content={meta.title}
						/>
						<meta
							name="og:description"
							content={meta.description}
						/>
					</React.Fragment>
				) : (
					<meta
						name="robots"
						content="noindex, nofollow"
					/>
				)}
			</Head>

			<main className={styles.layout}>
				{sidebarTransition(
					(style, isSidebarActive) =>
						isSidebarActive && (
							<animated.div
								className={styles.layout__sidebar}
								style={style}
							>
								<Sidebar onCloseSidebar={handleCloseSidebar} />
							</animated.div>
						)
				)}

				{overlayTransition(
					(style, isOverlayActive) =>
						isOverlayActive && (
							<animated.div
								style={style}
								className={styles.layout__overlay}
							/>
						)
				)}

				<Header
					className={styles.layout__header}
					onToggleSidebar={handleOpenSidebar}
				/>

				<div className={styles.layout__content}>{children}</div>
			</main>
		</React.Fragment>
	);
};

export default MainLayout;
