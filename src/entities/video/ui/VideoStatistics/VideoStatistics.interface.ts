import { IVideo } from "@/shared/interfaces/video.interface";

export interface VideoStatisticsProps {
	views: IVideo["views"];
	created_at: IVideo["created_at"];
	className?: string;
}
