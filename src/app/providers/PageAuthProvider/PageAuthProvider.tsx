import dynamic from "next/dynamic";
import React from "react";

import { PageAuthProviderProps } from "./PageAuthProvider.interface";

// Since I use API for authorization - it's must be executed only on CLIENT, not on SSR.
const CheckAuthProvider = dynamic(() => import("../CheckAuthProvider"), {
	ssr: false
});

const PageAuthProvider: React.FC<PageAuthProviderProps> = ({
	Component,
	children
}) => {
	return Component.isPrivate ? (
		<CheckAuthProvider Component={Component}> {children} </CheckAuthProvider>
	) : (
		<React.Fragment> {children} </React.Fragment>
	);
};

export default PageAuthProvider;
