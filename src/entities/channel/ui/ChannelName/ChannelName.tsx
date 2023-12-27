import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { ChannelNameProps } from "./ChannelName.interface";
import styles from "./ChannelName.module.scss";

const ChannelName: React.FC<ChannelNameProps> = ({
	kind = "primary",
	channel,
	withVerificationMark
}) => {
	return (
		<Link href={`/channels/${channel.id}`}>
			<a
				className={classNames(styles.content, {
					[styles[`content_${kind}`]]: Boolean(kind)
				})}
			>
				<div className={styles.name}>{channel.name}</div>

				{withVerificationMark && channel.isVerified && (
					<BsFillCheckCircleFill className={styles["verification-icon"]} />
				)}
			</a>
		</Link>
	);
};

export default ChannelName;
