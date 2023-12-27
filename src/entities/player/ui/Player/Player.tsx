import classNames from "classnames";
import React from "react";
import { BsFullscreen } from "react-icons/bs";
import { IoMdPause, IoMdPlay } from "react-icons/io";

import { getDuration } from "@/shared/lib/helpers";

import { usePlayer } from "../../lib/hooks";

import { PlayerProps } from "./Player.interface";
import styles from "./Player.module.scss";

const Player: React.FC<PlayerProps> = ({
	src,
	poster,
	autoPlay = false,
	className
}) => {
	const [bind, controls, status, bindProgressBar] = usePlayer({
		options: {
			autoPlay,
			rewindTime: 60
		}
	});

	return (
		<div className={styles.player}>
			<video
				{...bind}
				className={classNames(styles.player__video, className)}
				src={`${src}`}
				preload="metadata"
				onClick={controls.togglePlaying}
				poster={poster}
			/>

			<div className={styles.controls}>
				<div
					{...bindProgressBar}
					className={styles.controls__progress}
				>
					<div
						className={styles["controls__progress-inner"]}
						style={{
							width: `${status.progress}%`
						}}
					/>
				</div>

				<div className={styles.controls__actions}>
					<button
						className={styles["controls__actions-action"]}
						onClick={controls.togglePlaying}
					>
						{status.isPlaying ? <IoMdPause /> : <IoMdPlay />}
					</button>

					<div className={styles["controls__actions-time"]}>
						<p>{getDuration(status.currentTime)}</p>

						<p> / </p>

						<p>{getDuration(status.duration)}</p>
					</div>

					<button
						className={styles["controls__actions-action"]}
						onClick={controls.toggleFullscreen}
					>
						<BsFullscreen />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Player;
