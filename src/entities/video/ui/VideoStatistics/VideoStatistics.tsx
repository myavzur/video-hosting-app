import classNames from "classnames";
import React from "react";

import { getElapsedTime, getNumberMagnitude } from "@/shared/lib/helpers";

import { VideoStatisticsProps } from "./VideoStatistics.interface";
import styles from "./VideoStatistics.module.scss";

const VideoStatistics: React.FC<VideoStatisticsProps> = ({
	views,
	createdAt,
	className
}) => {
	return (
		<div className={classNames(styles.statistics, className)}>
			<div className={styles.statistics__stat}>
				{getNumberMagnitude(views)} views
			</div>

			<div className={styles.statistics__stat}>{getElapsedTime(createdAt)}</div>
		</div>
	);
};

export default VideoStatistics;
