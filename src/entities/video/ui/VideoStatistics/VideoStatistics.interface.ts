import { IVideo } from "@/shared/interfaces/video.interface";

export interface VideoStatisticsProps {
	views: IVideo["views"];
	createdAt: IVideo["createdAt"];
	className?: string;
}
