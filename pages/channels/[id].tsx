import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import Channel, { ChannelProps } from "@/screens/Channel";

import { ChannelService } from "@/entities/channel";

import { NextPageAuth } from "@/shared/interfaces/next-page-auth.interface";

const ChannelPage: NextPageAuth<ChannelProps> = ({ channel }) => {
	return <Channel channel={channel} />;
};

const channelService = new ChannelService();

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: channels } = await channelService.getAll();

		const paths = channels.map(channel => ({
			params: {
				id: channel.id.toString()
			}
		}));

		return {
			paths,
			fallback: "blocking"
		};
	} catch (e) {
		return {
			paths: [],
			fallback: false
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: channel } = await channelService.getChannel(String(params?.id));

		return {
			props: {
				channel
			} as ChannelProps
		};
	} catch (e) {
		return {
			props: {
				channel: {} as ChannelProps
			}
		};
	}
};

export default ChannelPage;
