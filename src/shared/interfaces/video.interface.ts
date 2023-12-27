import { IBase } from "./base.interface";
import { IChannel } from "./channel.interface";
import { IComment } from "./comment.interface";

export interface IVideo extends IBase {
	privacy: VideoPrivacy;
	name: string;
	description?: string;
	thumbnailPath?: string;
	videoPath: string;
	originalFileName: string;
	duration?: number;
	views: number;
	likesValue: number;

	isLiked?: boolean;
	channel: IChannel;
	comments: IComment[];
}

// Enums
export enum VideoPrivacy {
	PRIVATE,
	UNLISTED,
	PUBLIC
}

// API
export type ICreateDraftVideoBody = Pick<IVideo, "originalFileName">;
export type IUpdateVideoBody = Pick<
	Partial<IVideo>,
	"id" | "thumbnailPath" | "description" | "name" | "privacy"
>;
