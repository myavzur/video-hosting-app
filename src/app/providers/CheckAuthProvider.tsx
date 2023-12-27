import { useRouter } from "next/router";
import React from "react";

import { api } from "@/shared/model/root.api";

import { PageAuthProviderProps } from "./PageAuthProvider/PageAuthProvider.interface";

const CheckAuthProvider: React.FC<PageAuthProviderProps> = ({
	Component,
	children
}) => {
	const router = useRouter();
	const {
		data: channel,
		isLoading: isChannelLoading,
		isError: isChannelError
	} = api.useGetMyChannelQuery();

	if (isChannelLoading) {
		return null;
	}

	// Return page if user authorized
	if (channel && !isChannelError) {
		return <React.Fragment>{children}</React.Fragment>;
	}

	// Redirect is user not authorized
	if (Component.isPrivate) {
		router.replace("/");
	}

	return null;
};

export default CheckAuthProvider;
