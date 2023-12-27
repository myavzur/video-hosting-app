import React from "react";

import { MainLayout } from "@/layouts";

import { VideoCatalog } from "@/entities/video";

import { BRAND_NAME } from "@/shared/constants/brand.constants";
import { Heading } from "@/shared/ui";

import Discover from "./Discover";
import { HomeProps } from "./Home.interface";
import styles from "./Home.module.scss";

const Home: React.FC<HomeProps> = ({ topVideo, randomVideo, newVideos }) => {
	return (
		<MainLayout
			meta={{
				title: BRAND_NAME,
				description: `Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on ${BRAND_NAME}.`
			}}
		>
			<div className={styles.home}>
				{(topVideo || randomVideo) && (
					<section className={styles.home__discover}>
						<Heading> Discover </Heading>

						<Discover
							randomVideo={randomVideo}
							topVideo={topVideo}
						/>
					</section>
				)}

				<section className={styles.home__catalog}>
					<Heading> Latest </Heading>

					{newVideos ? (
						<VideoCatalog videos={newVideos} />
					) : (
						<h1>There is no videos in out database yet 🛸</h1>
					)}
				</section>
			</div>
		</MainLayout>
	);
};

export default Home;
