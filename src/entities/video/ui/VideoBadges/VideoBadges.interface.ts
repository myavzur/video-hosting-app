import { IVideo } from "@/shared/interfaces/video.interface";

export interface VideoStatisticsProps {
	duration: IVideo["duration"];
	views?: IVideo["views"];
	createdAt?: IVideo["createdAt"];
	privacy?: IVideo["privacy"];
	className?: string;
}
