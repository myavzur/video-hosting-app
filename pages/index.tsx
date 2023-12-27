import shuffle from "lodash/shuffle";
import { GetStaticProps } from "next";

import Home, { HomeProps } from "@/screens/Home";

import { VideoService } from "@/entities/video";

import { NextPageAuth } from "@/shared/interfaces/next-page-auth.interface";
import { IVideo } from "@/shared/interfaces/video.interface";

const HomePage: NextPageAuth<HomeProps> = props => {
	return <Home {...props} />;
};

const videoService = new VideoService();

export const getStaticProps: GetStaticProps = async () => {
	try {
		let randomVideo: IVideo | null = null;
		const { data: topVideos } = await videoService.getMostPopular();
		const { data: videos } = await videoService.getAll();

		const topVideo = topVideos[0]?.id && topVideos[0];

		// If there is only 1 video in the database and it is top video, then we do not need to get a random video
		if (topVideo && videos.length > 1) {
			// * Random video mustn't be the same as Top video
			const filteredVideos = videos.filter(video => video.id !== topVideo.id);
			randomVideo = shuffle(filteredVideos)[0];
		}

		if (!topVideo && videos.length > 0) {
			randomVideo = shuffle(videos)[0];
		}

		return {
			props: {
				topVideo: topVideos[0] || null,
				randomVideo,
				newVideos: videos
			} as HomeProps,
			revalidate: 60
		};
	} catch (e) {
		console.error(`%cCould't call server from HomePage! ${e}`, "color: red");
		return {
			props: {} as HomeProps
		};
	}
};

export default HomePage;
