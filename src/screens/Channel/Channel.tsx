import React from "react";

import { MainLayout } from "@/layouts";

import { ButtonSubscribe } from "@/features/subscribe-to-channel";

import { ChannelInfo } from "@/entities/channel";
import { VideoCatalog } from "@/entities/video";

import { BRAND_NAME } from "@/shared/constants/brand.constants";
import { api } from "@/shared/model/root.api";
import { Heading } from "@/shared/ui";

import { ChannelProps } from "./Channel.interface";
import styles from "./Channel.module.scss";

const ChannelPage: React.FC<ChannelProps> = ({ channel }) => {
	const { data: currentChannel } = api.useGetMyChannelQuery();

	return (
		<MainLayout
			meta={{
				title: `${channel.name} - ${BRAND_NAME} `,
				description: `Watch ${channel.name} on ${BRAND_NAME}!`
			}}
		>
			<div className={styles.channel_general}>
				<div className={styles.channel_general__top}>
					<ChannelInfo channel={channel} />

					{currentChannel?.id !== channel.id && (
						<ButtonSubscribe toChannelId={channel.id} />
					)}
				</div>

				<article className={styles.channel_general__description}>
					{channel.description}
				</article>
			</div>

			<Heading> Videos </Heading>

			{channel.videos?.length ? (
				<VideoCatalog videos={channel.videos} />
			) : (
				<h1>There is no videos on the channel yet!</h1>
			)}
		</MainLayout>
	);
};

export default ChannelPage;
