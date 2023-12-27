import { IBase } from "./base.interface";
import { IVideo } from "./video.interface";

export interface IChannel extends IBase {
	email: string;
	name: string;
	avatar_url: string;
	description?: string;
	password?: string;
	is_verified: boolean;
	subscribers_value: number;
	subscriptions: ISubscription[];
	videos?: IVideo[];
}

export interface ISubscription extends IBase {
	to_channel: IChannel;
}

// Enums
export enum SubscriptionResult {
	UNSUBSCRIBED,
	SUBSCRIBED
}

// API
export type ILoginBody = Pick<Required<IChannel>, "email" | "password">;
export type IRegistrationBody = Pick<
	Required<IChannel>,
	"email" | "password" | "name"
> & {
	password_confirmation: string;
};
export type IAuthResponse = Omit<IChannel, "password" | "videos">;
