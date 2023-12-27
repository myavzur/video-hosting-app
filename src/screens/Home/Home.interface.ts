import { IVideo } from "@/shared/interfaces/video.interface";

export interface HomeProps {
	topVideo?: IVideo;
	randomVideo?: IVideo;
	newVideos?: IVideo[];
}
