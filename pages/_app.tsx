import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextProgressBar from "nextjs-progressbar";
import React from "react";

import { PageAuthProvider, PersistedStoreProvider } from "@/app/providers";
import "@/app/styles/global.scss";

import { NotificationsOverlay } from "@/entities/notification";

const ThemeProvider = dynamic(() => import("@/app/providers/ThemeProvider"), {
	ssr: false
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<NextProgressBar
				color="rgb(147 197 253)"
				startPosition={1}
				stopDelayMs={500}
				height={3}
			/>

			<GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ""}>
				<PersistedStoreProvider>
					<NotificationsOverlay />

					<PageAuthProvider Component={Component}>
						<ThemeProvider>
							<Component {...pageProps} />
						</ThemeProvider>
					</PageAuthProvider>
				</PersistedStoreProvider>
			</GoogleOAuthProvider>
		</React.Fragment>
	);
}

export default MyApp;
