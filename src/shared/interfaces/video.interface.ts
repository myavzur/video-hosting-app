import { IBase } from "./base.interface";
import { IChannel } from "./channel.interface";
import { IComment } from "./comment.interface";

export interface IVideo extends IBase {
	privacy: VideoPrivacy;
	name: string;
	description?: string;
	poster_url?: string;
	file_url: string;
	file_name: string;
	file_type: string;
	duration?: number;
	views: number;
	likes_value: number;

	is_liked?: boolean;
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
export type ICreateDraftVideoBody = Pick<IVideo, "file_name">;
export type IUpdateVideoBody = Pick<
	Partial<IVideo>,
	"id" | "poster_url" | "description" | "name" | "privacy"
>;
