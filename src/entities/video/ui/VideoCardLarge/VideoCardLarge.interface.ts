import { IVideo } from "@/shared/interfaces/video.interface";

export interface VideoCardLargeProps {
	video: IVideo;
	orientation?: "portrait";

	preset?: "default" | "authorization-screen";
}
