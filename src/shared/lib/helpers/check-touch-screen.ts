// TODO: Replace in global.d.ts / custom.d.ts / whatever-else.d.ts
declare global {
	interface Navigator {
		msMaxTouchPoints: number;
	}
}

export const checkTouchScreen = () => {
	const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
	const hasOnTouchStartEvent = "ontouchstart" in window;
	const hasTouchPoints =
		navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

	return (hasOnTouchStartEvent || hasTouchPoints) && isCoarsePointer;
};
