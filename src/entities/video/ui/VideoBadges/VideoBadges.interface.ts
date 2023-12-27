import { IVideo } from "@/shared/interfaces/video.interface";

export interface VideoStatisticsProps {
	duration: IVideo["duration"];
	views?: IVideo["views"];
	created_at?: IVideo["created_at"];
	privacy?: IVideo["privacy"];
	className?: string;
}
