import { IChannel } from "@/shared/interfaces/channel.interface";
import { IComment } from "@/shared/interfaces/comment.interface";

export interface ChannelInfoProps {
	channel: IChannel;
	message?: IComment["content"];
}
