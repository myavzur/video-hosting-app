import classNames from "classnames";
import React from "react";

import { VideoCard } from "@/entities/video";

import { VideoCatalogProps } from "./VideoCatalog.interface";
import styles from "./VideoCatalog.module.scss";

const VideoCatalog: React.FC<VideoCatalogProps> = ({
	videos,
	direction,
	className,
	...videoProps
}) => {
	return (
		<div
			className={classNames(
				styles.catalog,
				{
					[styles[`catalog--direction-${direction}`]]: Boolean(direction)
				},
				className
			)}
		>
			{videos.map(video => (
				<VideoCard
					{...videoProps}
					video={video}
					key={video.id}
				/>
			))}
		</div>
	);
};

export default VideoCatalog;
