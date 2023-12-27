import cn from "classnames";
import React, { useEffect, useRef } from "react";
import videojs from "video.js";

import { DEFAULT_OPTIONS } from "./VideoJsPlayer.config";
import { VideojsPlayerProps } from "./VideoJsPlayer.interface";
import { reorderBottomPanel } from "../../lib/helpers";

export const VideoJsPlayer: React.FC<VideojsPlayerProps> = ({
	classNames,
	options
}) => {
	const mergedOptions = videojs.mergeOptions(DEFAULT_OPTIONS, options);

	const videoRef = useRef<HTMLDivElement>(null);
	const playerRef = useRef<videojs.Player | null>(null);

	useEffect(() => {
		if (!playerRef.current && videoRef.current) {
			const videoEl = document.createElement("video");
			videoRef.current.appendChild(videoEl);
			playerRef.current = videojs(videoEl, mergedOptions);

			const player = playerRef.current;
			player.on("ready", () => {
				reorderBottomPanel(player);
			});
		}

		return () => {
			if (playerRef.current && !playerRef.current.isDisposed()) {
				playerRef.current.dispose();
				playerRef.current = null;
			}
		};
	}, [mergedOptions]);

	return (
		<div
			ref={videoRef}
			className={cn(
				"video-js",
				"vjs-default-skin",
				"vjs-big-play-centered",
				classNames
			)}
		></div>
	);
};

export default VideoJsPlayer;
