import { IBase } from "./base.interface";
import { IChannel } from "./channel.interface";
import { IVideo } from "./video.interface";

export interface IComment extends IBase {
	content: string;

	channel: IChannel;
	video: IVideo;
}

export interface ICreateCommentBody extends Pick<IComment, "content"> {
	videoId: IVideo["id"];
}
