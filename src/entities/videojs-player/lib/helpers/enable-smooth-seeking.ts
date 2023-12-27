import videojs from "video.js";

// https://github.com/videojs/video.js/issues/4460#issuecomment-312861657
export const enableSmoothSeeking = () => {
	const SeekBar = videojs.getComponent("SeekBar");

	SeekBar.prototype.getPercent = function getPercent() {
		// Allows for smooth scrubbing, when player can't keep up.
		// const time = (this.player_.scrubbing()) ?
		//   this.player_.getCache().currentTime :
		//   this.player_.currentTime()
		const time = this.player_.currentTime();
		const percent = time / this.player_.duration();
		return percent >= 1 ? 1 : percent;
	};

	SeekBar.prototype.handleMouseMove = function handleMouseMove(event: MouseEvent) {
		let newTime = this.calculateDistance(event) * this.player_.duration();
		if (newTime === this.player_.duration()) {
			newTime = newTime - 0.1;
		}
		this.player_.currentTime(newTime);
		this.update();
	};
};
