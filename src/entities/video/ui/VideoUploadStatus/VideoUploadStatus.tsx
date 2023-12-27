import cn from "classnames";
import React from "react";
import { TbCheck, TbUpload } from "react-icons/tb";

import { VideoUploadStatusProps } from "./VideoUploadStatus.interface";
import styles from "./VideoUploadStatus.module.scss";

const VideoUploadStatus: React.FC<VideoUploadStatusProps> = ({
	progress,
	isUploading,
	isSuccess
}) => {
	return (
		<div className={styles.status}>
			<div className={styles.status__indicators}>
				<span
					className={cn(styles["status__indicators-indicator"], {
						[styles["status__indicators-indicator_processing"]]: isUploading,
						[styles["status__indicators-indicator_done"]]: !isUploading
					})}
				>
					<TbUpload />
				</span>

				<span
					className={cn(styles["status__indicators-indicator"], {
						[styles["status__indicators-indicator_done"]]: !isUploading && isSuccess
					})}
				>
					<TbCheck />
				</span>
			</div>

			<span className={styles.status__message}>
				{isUploading ? `Uploading ${progress}%` : "Uploaded successfully"}
			</span>
		</div>
	);
};

export default VideoUploadStatus;
