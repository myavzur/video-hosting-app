import classNames from "classnames";
import React from "react";

import { getNumberMagnitude } from "@/shared/lib/helpers";
import { Avatar } from "@/shared/ui";

import { ChannelCardProps } from "./ChannelCard.interface";
import styles from "./ChannelCard.module.scss";

const ChannelCard: React.FC<ChannelCardProps> = ({ channel, size, children }) => {
	return (
		<div
			className={classNames(styles.card, {
				[styles[`card--size-${size}`]]: Boolean(size)
			})}
		>
			<div className={styles.card__info}>
				<Avatar
					className={styles["card__info-avatar"]}
					size={size}
					src={channel.avatarPath}
					alt={channel.name}
				/>

				<div className={styles["card__info-summary"]}>
					<p className={styles["card__info-summary-name"]}>{channel.name}</p>

					{size !== "sm" && (
						<p className={styles["card__info-summary-description"]}>
							{getNumberMagnitude(channel.subscribersValue)} Subscribers
						</p>
					)}
				</div>
			</div>

			{children && <div className={styles.card__actions}>{children}</div>}
		</div>
	);
};

export default ChannelCard;
