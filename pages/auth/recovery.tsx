import { GetStaticProps } from "next";

import Recovery from "@/screens/Recovery";

import { AuthLayout, AuthLayoutProps } from "@/layouts";

import { VideoService } from "@/entities/video";

import { BRAND_NAME } from "@/shared/constants/brand.constants";
import { NextPageAuth } from "@/shared/interfaces/next-page-auth.interface";

const RecoveryPage: NextPageAuth<Pick<AuthLayoutProps, "video">> = ({ video }) => {
	return (
		<AuthLayout
			meta={{
				title: `Password Recovery - ${BRAND_NAME}`,
				description: "Reset your password, be free"
			}}
			video={video}
		>
			<Recovery />
		</AuthLayout>
	);
};

const videoService = new VideoService();

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: topVideos } = await videoService.getMostPopular();

		return {
			props: {
				video: topVideos[0] || null
			} as Pick<AuthLayoutProps, "video">,
			revalidate: 60
		};
	} catch (e) {
		console.log(
			`%cCould't call server from Reset Password page! ${e}`,
			"color: red"
		);

		return {
			props: {
				video: {}
			} as Pick<AuthLayoutProps, "video">
		};
	}
};

export default RecoveryPage;
