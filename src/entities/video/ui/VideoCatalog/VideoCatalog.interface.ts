import { IVideo } from "@/shared/interfaces/video.interface";

import { VideoCardProps } from "../VideoCard/VideoCard.interface";

export interface VideoCatalogProps extends Omit<VideoCardProps, "video"> {
	videos: IVideo[];
	className?: string;
	direction?: "row" | "column";
}
