import React from "react";

import { getNumberMagnitude } from "@/shared/lib/helpers";
import { Avatar } from "@/shared/ui";

import ChannelName from "../ChannelName";

import { ChannelInfoProps } from "./ChannelInfo.interface";
import styles from "./ChannelInfo.module.scss";

const ChannelInfo: React.FC<ChannelInfoProps> = ({ channel, message }) => {
	return (
		<div className={styles.info}>
			<Avatar
				className={styles.info__avatar}
				src={channel.avatarPath}
				alt={channel.name}
			/>

			<div className={styles.info__content}>
				<div className={styles.info__content_name}>
					<ChannelName channel={channel} />
				</div>

				<div className={styles.info__content_message}>
					{message
						? message
						: `${getNumberMagnitude(channel.subscribersValue)} subscribers`}
				</div>
			</div>
		</div>
	);
};

export default ChannelInfo;
