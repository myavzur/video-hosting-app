import classNames from "classnames";
import React from "react";
import {
	AiFillCalendar,
	AiFillEye,
	AiFillHeart,
	AiFillLike,
	AiOutlineShareAlt
} from "react-icons/ai";

import { ButtonSubscribe } from "@/features/subscribe-to-channel";

import { ChannelCard } from "@/entities/channel";
import { getVideoPrivacy, videoApi } from "@/entities/video";

import { VideoPrivacy } from "@/shared/interfaces/video.interface";
import { getElapsedTime, getNumberMagnitude } from "@/shared/lib/helpers";
import { api } from "@/shared/model/root.api";
import { Button, Divider } from "@/shared/ui";

import { VideoInfoProps } from "./VideoInfo.interface";
import styles from "./VideoInfo.module.scss";

const VideoInfo: React.FC<VideoInfoProps> = ({ video }) => {
	const { data: channel } = api.useGetMyChannelQuery();
	const videoPrivacy = getVideoPrivacy(video.privacy);

	const [updateLikes] = videoApi.useUpdateLikesMutation();

	return (
		<div className={styles.info}>
			<div className={styles.info__left}>
				<h1 className={styles.name}>{video.name}</h1>

				{video.description && (
					<React.Fragment>
						<Divider className={styles.divider} />

						<p className={styles.description}>{video.description}</p>
					</React.Fragment>
				)}
			</div>

			<div className={styles.info__right}>
				<ChannelCard channel={video.channel}>
					{channel?.id !== video.channel.id && (
						<ButtonSubscribe
							toChannelId={video.channel.id}
							kind="secondary"
							size="xs"
						/>
					)}
				</ChannelCard>

				<div className={styles.details}>
					<div className={styles.details__actions}>
						<Button
							onClick={() => updateLikes(video.id)}
							hint="Like"
							icon={AiFillLike}
							kind="secondary"
							size="xs"
						>
							{video.isLiked ? "Unlike" : "Like"}
						</Button>

						<Button
							hint="Share"
							icon={AiOutlineShareAlt}
							kind="secondary"
							size="xs"
						>
							Share
						</Button>
					</div>

					<Divider className={styles.divider} />

					<div className={styles.details__stats}>
						<div
							className={classNames(styles.stat, {
								[styles["stat--color-red"]]: video.isLiked
							})}
						>
							<div className={styles.stat__icon}>
								<AiFillHeart />
							</div>

							<p className={styles.stat__label}>
								{getNumberMagnitude(video.likesValue)} Likes
							</p>
						</div>

						<div className={styles.stat}>
							<div className={styles.stat__icon}>
								<AiFillEye />
							</div>

							<p className={styles.stat__label}>
								{getNumberMagnitude(video.views)} Views
							</p>
						</div>

						<div className={styles.stat}>
							<div className={styles.stat__icon}>
								<AiFillCalendar />
							</div>

							<p className={styles.stat__label}>{getElapsedTime(video.createdAt)}</p>
						</div>

						{video.privacy !== VideoPrivacy.PUBLIC && (
							<div className={styles.stat}>
								<div className={styles.stat__icon}>
									<videoPrivacy.icon />
								</div>

								<p className={styles.stat__label}>{videoPrivacy.label}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoInfo;
