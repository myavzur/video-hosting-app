import { IChannel } from "@/shared/interfaces/channel.interface";

export interface ChannelNameProps {
	channel: IChannel;
	withVerificationMark?: boolean;
	kind?: "primary" | "secondary";
}
