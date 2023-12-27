import React from "react";
import { TbBell, TbBellRinging } from "react-icons/tb";

import { SubscriptionResult } from "@/shared/interfaces/channel.interface";
import { api } from "@/shared/model/root.api";
import Button from "@/shared/ui/Button";

import { ButtonSubscribeProps } from "./ButtonSubscribe.interface";

const ButtonSubscribe: React.FC<ButtonSubscribeProps> = ({
	toChannelId,
	...buttonProps
}) => {
	const { data: channel } = api.useGetMyChannelQuery();
	const [subscribe, subscribeStatus] = api.useSubscribeMutation();

	const isSubscribed =
		subscribeStatus.data?.result === SubscriptionResult.SUBSCRIBED ||
		channel?.subscriptions.some(
			subscription => subscription.to_channel.id === toChannelId
		);

	return (
		<Button
			{...buttonProps}
			hint="Subscribe"
			onClick={() => subscribe(toChannelId).unwrap()}
			isActive={isSubscribed}
			disabled={subscribeStatus.isLoading}
			icon={isSubscribed ? TbBellRinging : TbBell}
		>
			{isSubscribed ? "Unsubscribe" : "Subscribe"}
		</Button>
	);
};

export default ButtonSubscribe;
