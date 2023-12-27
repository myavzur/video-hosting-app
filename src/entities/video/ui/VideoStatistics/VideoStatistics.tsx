import classNames from "classnames";
import React from "react";

import { getElapsedTime, getNumberMagnitude } from "@/shared/lib/helpers";

import { VideoStatisticsProps } from "./VideoStatistics.interface";
import styles from "./VideoStatistics.module.scss";

const VideoStatistics: React.FC<VideoStatisticsProps> = ({
	views,
	created_at,
	className
}) => {
	return (
		<div className={classNames(styles.statistics, className)}>
			<div className={styles.statistics__stat}>
				{getNumberMagnitude(views)} views
			</div>

			<div className={styles.statistics__stat}>{getElapsedTime(created_at)}</div>
		</div>
	);
};

export default VideoStatistics;
