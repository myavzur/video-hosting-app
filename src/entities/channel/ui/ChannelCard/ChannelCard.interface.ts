import { IChannel } from "@/shared/interfaces/channel.interface";

export interface ChannelCardProps {
	channel: IChannel;
	children?: React.ReactNode;
	size?: "sm" | "base";
}
