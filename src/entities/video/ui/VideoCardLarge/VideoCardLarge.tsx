import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ChannelName } from "@/entities/channel";
import { VideoBadges } from "@/entities/video";

import { VideoCardLargeProps } from "./VideoCardLarge.interface";
import styles from "./VideoCardLarge.module.scss";

const VideoCardLarge: React.FC<VideoCardLargeProps> = ({
	video,
	orientation,
	preset
}) => {
	return (
		<div
			className={cn(styles.video, {
				[styles[`video--orientation-${orientation}`]]: Boolean(orientation),
				[styles[`video--preset-${preset}`]]: Boolean(preset)
			})}
		>
			{video.thumbnailPath && (
				<Image
					className={styles.thumbnail}
					src={video.thumbnailPath}
					alt={video.name}
					layout="fill"
					priority
				/>
			)}

			<main className={styles.information}>
				<div className={styles.information__general}>
					<VideoBadges
						className={styles["information__general-badges"]}
						duration={video.duration}
						views={video.views}
						createdAt={video.createdAt}
					/>

					<Link href={`/videos/${video.id}`}>
						<a className={styles["information__general-name"]}>{video.name}</a>
					</Link>
				</div>

				<div className={styles.information__author}>
					<legend className={styles["information__author-legend"]}>Video by</legend>

					<div className={styles["information__author-name"]}>
						<ChannelName
							channel={video.channel}
							withVerificationMark={true}
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default VideoCardLarge;
