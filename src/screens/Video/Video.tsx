import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { MainLayout } from "@/layouts";

import { VideoCard, videoApi } from "@/entities/video";
import { VideoJsPlayer } from "@/entities/videojs-player";

import { BRAND_NAME } from "@/shared/constants/brand.constants";
import { Loader } from "@/shared/ui";

import { VideoProps } from "./Video.interface";
import styles from "./Video.module.scss";
import VideoInfo from "./VideoInfo";

const Video: React.FC<VideoProps> = () => {
	const { query } = useRouter();

	const { data: video, isLoading: isVideoLoading } = videoApi.useGetVideoByIdQuery(
		String(query.id),
		{
			skip: !query.id
		}
	);
	const [updateViews] = videoApi.useUpdateViewsMutation();

	// * Update video views on page loading
	useEffect(() => {
		if (query.id) {
			updateViews(String(query.id));
		}
	}, [updateViews, query]);

	return (
		<MainLayout
			meta={{
				title: `${
					isVideoLoading
						? `Loading [${query.id}]...`
						: video?.name
						? video?.name
						: `Bug - ${BRAND_NAME}`
				}`,
				description: `Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on ${BRAND_NAME}.`
			}}
		>
			{isVideoLoading && <Loader />}

			{video && (
				<div className={styles.layout}>
					<main className={classNames(styles["layout__video"], styles.video)}>
						<VideoJsPlayer
							classNames={styles["video__player"]}
							options={{
								autoplay: true,
								sources: [
									{
										src: video.file_url,
										type: "video/mp4"
									}
								],
								poster: video.poster_url
							}}
						/>

						<div className={styles["video__info"]}>
							<VideoInfo video={video} />
						</div>
					</main>

					<aside className={styles["layout__similar"]}>
						<VideoCard video={video} />
					</aside>
				</div>
			)}
		</MainLayout>
	);
};

export default Video;
