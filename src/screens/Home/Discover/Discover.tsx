import React from "react";

import { VideoCardLarge } from "@/entities/video";

import { HomeProps } from "../Home.interface";

import styles from "./Discover.module.scss";

type DiscoverProps = Pick<HomeProps, "topVideo" | "randomVideo">;

const Discover: React.FC<DiscoverProps> = ({ topVideo, randomVideo }) => {
	return (
		<div className={styles.discover}>
			{topVideo && (
				<div className={styles.discover__top}>
					<VideoCardLarge video={topVideo} />
				</div>
			)}

			{randomVideo && (
				<div className={styles.discover__random}>
					<VideoCardLarge video={randomVideo} />
				</div>
			)}
		</div>
	);
};

export default Discover;
