import Video, { VideoProps } from "@/screens/Video";

import { NextPageAuth } from "@/shared/interfaces/next-page-auth.interface";

const VideoPage: NextPageAuth<VideoProps> = ({ video }) => {
	return <Video video={video} />;
};

export default VideoPage;
