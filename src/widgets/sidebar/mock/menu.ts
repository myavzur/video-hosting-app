import { IconType } from "react-icons";
import { HiCollection, HiHome, HiStar } from "react-icons/hi";
import { IoMdFlame } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";

export const menu: {
	title: string;
	icon: IconType;
	path: string;
	isPrivate?: boolean;
}[] = [
	{
		title: "Home",
		icon: HiHome,
		path: "/"
	},
	{
		title: "Trending",
		icon: IoMdFlame,
		path: "/trending"
	},
	{
		title: "Channel",
		icon: HiStar,
		path: "/channels/me",
		isPrivate: true
	},
	{
		title: "Studio",
		icon: MdDashboardCustomize,
		path: "/studio",
		isPrivate: true
	},
	{
		title: "Subscriptions",
		icon: HiCollection,
		path: "/subscriptions",
		isPrivate: true
	}
];
