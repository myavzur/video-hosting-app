import classNames from "classnames";
import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { DiDatabase } from "react-icons/di";
import { GiBleedingEye } from "react-icons/gi";

import { getVideoPrivacy } from "@/entities/video";

import {
	getDuration,
	getElapsedTime,
	getNumberMagnitude
} from "@/shared/lib/helpers";
import { Badge } from "@/shared/ui";

import { VideoStatisticsProps } from "./VideoBadges.interface";
import styles from "./VideoBadges.module.scss";

const VideoBadges: React.FC<VideoStatisticsProps> = ({
	duration,
	views,
	created_at,
	privacy,
	className
}) => {
	const videoPrivacy = getVideoPrivacy(privacy);

	return (
		<div className={classNames(styles.badges, className)}>
			{typeof privacy === "number" && (
				<Badge
					className={styles.badges__badge}
					icon={videoPrivacy.icon}
					label={videoPrivacy.label}
				/>
			)}

			{duration && (
				<Badge
					className={styles.badges__badge}
					icon={AiFillClockCircle}
					label={getDuration(duration)}
				/>
			)}

			{(typeof views === "number" && (
				<Badge
					className={styles.badges__badge}
					icon={GiBleedingEye}
					label={`${getNumberMagnitude(views)} views`}
				/>
			)) ||
				null}

			{created_at && (
				<Badge
					className={styles.badges__badge}
					icon={DiDatabase}
					label={getElapsedTime(created_at)}
				/>
			)}
		</div>
	);
};

export default VideoBadges;
