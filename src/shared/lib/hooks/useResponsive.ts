import { useEffect, useState } from "react";

import { checkTouchScreen } from "../helpers";

const MOBILE_BREAKPOINT = 768;

export const useResponsive = () => {
	const [isMobile, setMobile] = useState(
		window.screen.availWidth <= MOBILE_BREAKPOINT
	);
	const [isTouchScreenDevice, setTouchScreenDevice] = useState(checkTouchScreen());

	const handleWindowResize = () => {
		setMobile(window.screen.availWidth <= MOBILE_BREAKPOINT);
		setTouchScreenDevice(checkTouchScreen());
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return {
		isMobile,
		isTouchScreenDevice
	};
};
