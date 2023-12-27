import { GetStaticProps } from "next";

import SignUp from "@/screens/SignUp";

import { AuthLayout, AuthLayoutProps } from "@/layouts";

import { VideoService } from "@/entities/video";

import { BRAND_NAME } from "@/shared/constants/brand.constants";
import { NextPageAuth } from "@/shared/interfaces/next-page-auth.interface";

const SignInPage: NextPageAuth<Pick<AuthLayoutProps, "video">> = ({ video }) => {
	return (
		<AuthLayout
			meta={{
				title: `Sign Up - ${BRAND_NAME}`,
				description: `Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on ${BRAND_NAME}.`
			}}
			video={video}
		>
			<SignUp />
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
		console.log(`%cCould't call server from Sign Up page! ${e}`, "color: red");

		return {
			props: {
				video: {}
			} as Pick<AuthLayoutProps, "video">
		};
	}
};

export default SignInPage;
