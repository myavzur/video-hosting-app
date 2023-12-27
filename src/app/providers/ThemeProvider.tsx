import React, { PropsWithChildren, useLayoutEffect } from "react";

import { useStoreSelector } from "@/shared/lib/hooks";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const { theme } = useStoreSelector(state => state.options);

	useLayoutEffect(() => {
		document.body.classList.add(`theme--${theme}`);
	}, [theme]);

	return <React.Fragment>{children}</React.Fragment>;
};

export default ThemeProvider;
