import { IBase } from "./base.interface";
import { IVideo } from "./video.interface";

export interface IChannel extends IBase {
	email: string;
	name: string;
	avatarPath: string;
	description?: string;
	password?: string;

	isVerified: boolean;
	subscribersValue: number;

	subscriptions: ISubscription[];
	videos?: IVideo[];
}

export interface ISubscription extends IBase {
	toChannel: IChannel;
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
	passwordConfirmation: string;
};
export type IAuthResponse = Omit<IChannel, "password" | "videos">;
