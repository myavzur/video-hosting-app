import Link from "next/link";
import React from "react";

import { MainLayout } from "@/layouts";

import { ChannelCard } from "@/entities/channel";

import { api } from "@/shared/model/root.api";
import { Heading } from "@/shared/ui";

const Subscriptions: React.FC = () => {
	const { data: channel } = api.useGetMyChannelQuery();

	return (
		<MainLayout meta={{ title: "Subscriptions" }}>
			<Heading> Subscriptions </Heading>

			{channel?.subscriptions?.length ? (
				channel.subscriptions.map(({ toChannel }) => {
					return (
						<Link
							href={`/channels/${toChannel.id}`}
							key={toChannel.id}
						>
							<a>
								<ChannelCard channel={toChannel} />
							</a>
						</Link>
					);
				})
			) : (
				<h1>You doesnt have any subscriptions yet... 🏝️</h1>
			)}
		</MainLayout>
	);
};

export default Subscriptions;
