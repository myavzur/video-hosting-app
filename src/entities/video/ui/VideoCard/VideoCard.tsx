import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

import { ChannelName } from "@/entities/channel";
import { VideoBadges } from "@/entities/video";
import { VideoStatistics } from "@/entities/video";

import { Avatar, ButtonIcon } from "@/shared/ui";

import { VideoCardProps } from "./VideoCard.interface";
import styles from "./VideoCard.module.scss";

const VideoCard: React.FC<VideoCardProps> = ({
	video,
	kind = "primary",
	onUpdate,
	onDelete,
	withPrivacyBadge
}) => {
	return (
		<div
			className={classNames(styles.video, {
				[styles[`video--kind-${kind}`]]: Boolean(kind)
			})}
		>
			<div className={styles.thumbnail}>
				{video.poster_url ? (
					<Image
						className={styles.thumbnail__image}
						src={video.poster_url}
						alt={video.name}
						width={250}
						height={190}
						layout="fill"
					/>
				) : (
					<AiOutlineFileImage className={styles.thumbnail__placeholder} />
				)}

				<div className={styles.thumbnail__overlay}>
					<Link href={`/channels/${video.channel.id}`}>
						<a className={styles["thumbnail__overlay-avatar"]}>
							<Avatar
								src={video.channel.avatar_url}
								alt={video.channel.name}
							/>
						</a>
					</Link>

					<VideoBadges
						className={styles["thumbnail__overlay-badges"]}
						duration={video.duration}
						privacy={withPrivacyBadge ? video.privacy : undefined}
					/>
				</div>
			</div>

			<div className={styles.information}>
				<div className={styles["information__channel-name"]}>
					<ChannelName
						kind="secondary"
						channel={video.channel}
						withVerificationMark={true}
					/>
				</div>

				<Link href={`/videos/${video.id}`}>
					<a className={styles.information__name}>{video.name}</a>
				</Link>

				<VideoStatistics
					className={styles.information__statistics}
					views={video.views}
					created_at={video.created_at}
				/>

				{(Boolean(onUpdate) || Boolean(onDelete)) && (
					<div className={styles.information__actions}>
						{onUpdate && (
							<ButtonIcon
								onClick={() => onUpdate(video)}
								hint={`Edit "${video.name}"`}
							>
								<BiEdit />
							</ButtonIcon>
						)}

						{onDelete && (
							<ButtonIcon
								onClick={() => onDelete(video)}
								hint={`Delete "${video.name}"`}
							>
								<RiDeleteBin2Line />
							</ButtonIcon>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default VideoCard;
