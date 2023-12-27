import React from "react";

import { IPlayerElement } from "../../interfaces/player-element.interface";

interface UsePlayerParams {
	options: {
		autoPlay: boolean;
		/** Seconds */
		rewindTime: number;
	};
}
type UsePlayerResult = [
	{
		ref: React.RefObject<IPlayerElement>;
		autoPlay: boolean;
	},
	{
		togglePlaying: () => Promise<void>;
		toggleFullscreen: () => Promise<void>;
	},
	{
		isTouched: boolean;
		isFocused: boolean;
		isPlaying: boolean;
		currentTime: number;
		duration: number;
		progress: number;
	},
	{
		ref: React.RefObject<HTMLDivElement>;
	}
];

export type UsePlayer = (params: UsePlayerParams) => UsePlayerResult;
