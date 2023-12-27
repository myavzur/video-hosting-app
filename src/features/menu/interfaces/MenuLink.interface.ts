import { IconType } from "react-icons";

export interface IMenuLink {
	title: string;
	path: string;
	icon?: IconType;
	image?: string;
	isPrivate?: boolean;
}
