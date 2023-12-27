import React from "react";

import { MainLayout } from "@/layouts";

import { VideoCatalog } from "@/entities/video";

import { BRAND_NAME } from "@/shared/constants/brand.constants";
import { Heading } from "@/shared/ui";

import { TrendingProps } from "./Trending.interface";

const Trending: React.FC<TrendingProps> = ({ topVideos }) => {
	return (
		<MainLayout
			meta={{
				title: `Trending - ${BRAND_NAME}`,
				description: `The pulse of what's trending on ${BRAND_NAME}. Check out the latest music videos, trailers, comedy clips, and everything else that people are watching right now.`
			}}
		>
			<Heading> Trending </Heading>
			<VideoCatalog videos={topVideos} />
		</MainLayout>
	);
};

export default Trending;
