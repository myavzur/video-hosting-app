import React from "react";

import { Avatar } from "@/shared/ui";

import { CurrentChannelProps } from "./CurrentChannel.interface";
import styles from "./CurrentChannel.module.scss";

const CurrentChannel: React.FC<CurrentChannelProps> = ({ channel }) => {
	return (
		<div className={styles.current}>
			<div className={styles.current__avatar}>
				<Avatar
					src={channel.avatar_url}
					alt={channel.name}
				/>
			</div>
		</div>
	);
};

export default CurrentChannel;
