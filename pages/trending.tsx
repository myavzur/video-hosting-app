import { GetStaticProps } from "next";

import Trending, { TrendingProps } from "@/screens/Trending";

import { VideoService } from "@/entities/video";

import { NextPageAuth } from "@/shared/interfaces/next-page-auth.interface";

const TrendingPage: NextPageAuth<TrendingProps> = ({ topVideos }) => {
	return <Trending topVideos={topVideos} />;
};

const videoService = new VideoService();

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: topVideos } = await videoService.getMostPopular();

		return {
			props: {
				topVideos
			} as TrendingProps,
			revalidate: 60
		};
	} catch (e) {
		console.log(`%cCould't call server from TrendingPage! ${e}`, "color: red");

		return {
			props: {
				topVideos: []
			} as TrendingProps
		};
	}
};

export default TrendingPage;
