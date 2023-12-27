import videojs from "video.js";

export const reorderBottomPanel = (player: videojs.Player) => {
	const controlBar = player.getChild("controlBar");
	const progressControl = controlBar?.getChild("progressControl");

	if (!controlBar || !progressControl) return;

	const controlBarEl = controlBar.el();
	const progressControlEl = progressControl.el();

	controlBarEl.insertBefore(progressControlEl, controlBarEl.firstChild);
};
