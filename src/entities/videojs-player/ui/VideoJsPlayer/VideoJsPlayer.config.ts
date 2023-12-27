import videojs from "video.js";

export const DEFAULT_OPTIONS: videojs.PlayerOptions = {
	preload: "auto",
	autoplay: false,
	controls: true,
	muted: false,
	controlBar: {
		progressControl: true,
		playToggle: true,
		volumePanel: true,
		currentTimeDisplay: true,
		timeDivider: true,
		durationDisplay: true,
		customControlSpacer: true,
		pictureInPictureToggle: true,
		fullscreenToggle: true,
		remainingTimeDisplay: false
	}
};
