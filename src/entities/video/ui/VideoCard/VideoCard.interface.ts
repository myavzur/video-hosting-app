import { IVideo } from "@/shared/interfaces/video.interface";

export interface VideoCardProps {
	video: IVideo;
	kind?: "primary" | "secondary";

	onUpdate?: (video: IVideo) => void;
	onDelete?: (video: IVideo) => void;
	withPrivacyBadge?: boolean;
}
