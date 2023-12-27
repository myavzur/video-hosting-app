import { IVideo } from "@/shared/interfaces/video.interface";

import { DefaultLayoutProps } from "../../interfaces/DefaultLayout.interface";

export interface AuthLayoutProps extends DefaultLayoutProps {
	video?: IVideo;
}
