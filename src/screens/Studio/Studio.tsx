import React, { useState } from "react";

import { MainLayout } from "@/layouts";

import { DeleteVideoModal } from "@/widgets/delete-video-modal";
import { EditVideoModal } from "@/widgets/edit-video-modal";

import { VideoCatalog } from "@/entities/video";

import { BRAND_NAME } from "@/shared/constants/brand.constants";
import { IVideo } from "@/shared/interfaces/video.interface";
import { api } from "@/shared/model/root.api";
import { Heading } from "@/shared/ui";

const Studio: React.FC = () => {
	const { data: profile } = api.useGetMyChannelQuery();

	// Modal
	const [videoIdToEdit, setVideoIdToEdit] = useState<IVideo["id"] | null>(null);
	const [videoToDelete, setVideoToDelete] = useState<IVideo | null>(null);

	const handleUpdateVideo = (video: IVideo) => {
		setVideoIdToEdit(video.id);
	};

	const handleDeleteVideo = (video: IVideo) => {
		setVideoToDelete(video);
	};

	return (
		<MainLayout meta={{ title: `${BRAND_NAME} Studio` }}>
			<Heading> Studio </Heading>

			{profile?.videos && (
				<VideoCatalog
					videos={profile.videos}
					onUpdate={handleUpdateVideo}
					onDelete={handleDeleteVideo}
					withPrivacyBadge={true}
				/>
			)}

			{videoIdToEdit && (
				<EditVideoModal
					videoId={videoIdToEdit}
					onClose={() => setVideoIdToEdit(null)}
				/>
			)}

			{videoToDelete && (
				<DeleteVideoModal
					video={videoToDelete}
					onClose={() => setVideoToDelete(null)}
				/>
			)}
		</MainLayout>
	);
};

export default Studio;
