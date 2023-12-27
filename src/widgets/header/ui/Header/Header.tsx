import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { IoMdExit } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import { EditVideoModal } from "@/widgets/edit-video-modal";
import { UploadVideoModal } from "@/widgets/upload-video-modal";

import { Search } from "@/features/search";

import { VideoUploadStatus, videoApi } from "@/entities/video";

import { useUploadFile } from "@/shared/lib/hooks";
import { api } from "@/shared/model/root.api";
import { ButtonIcon, Logo } from "@/shared/ui";

import AuthLinks from "../AuthLinks";
import CurrentChannel from "../CurrentChannel";

import { HeaderProps } from "./Header.interface";
import styles from "./Header.module.scss";

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, className }) => {
	const { data: channel, error: channelError } = api.useGetMyChannelQuery();

	const [logout] = api.useLogoutMutation();

	const [createDraftVideo, createDraftVideoStatus] =
		videoApi.useCreateDraftVideoMutation();

	const [uploadFile, uploadFileStatus] = useUploadFile({
		url: "/videos/upload"
	});

	// Modal
	const [isFileChosen, setFileChosen] = useState(false);
	const [isUploadModal, setUploadModal] = useState(false);
	const handleCloseUploadModal = useCallback(() => {
		setUploadModal(false);
		setFileChosen(false);
	}, []);
	const handleOpenUploadModal = useCallback(() => setUploadModal(true), []);

	const handleFileChange = async (files: FileList) => {
		const file = files[0];

		try {
			setFileChosen(true);

			const video = await createDraftVideo({
				file_name: file.name
			}).unwrap();

			const formData = new FormData();
			formData.append("video", file);
			formData.append("videoId", String(video.id));

			await uploadFile(formData);
		} catch (e) {
			setFileChosen(false);
		}
	};

	return (
		<header className={classNames(styles.header, className)}>
			<div className={styles.header__left}>
				<ButtonIcon
					className={styles["header__left-toggle"]}
					hint="Open sidebar"
					onClick={onToggleSidebar}
				>
					<RxHamburgerMenu />
				</ButtonIcon>

				<Logo withText={true} />
			</div>

			<div className={styles.header__search}>
				<Search />
			</div>

			{channel && !channelError ? (
				<div className={styles.header__toolbar}>
					<div className={styles["header__toolbar-action"]}>
						<ButtonIcon
							hint="Upload video"
							onClick={handleOpenUploadModal}
						>
							<RiVideoAddFill />
						</ButtonIcon>
					</div>

					<div className={styles["header__toolbar-action"]}>
						<ButtonIcon
							hint="Logout"
							onClick={() => logout()}
						>
							<IoMdExit />
						</ButtonIcon>
					</div>

					<div className={styles["header__toolbar-current"]}>
						<CurrentChannel channel={channel} />
					</div>
				</div>
			) : (
				<AuthLinks />
			)}

			{isUploadModal &&
				(isFileChosen && createDraftVideoStatus.isSuccess ? (
					<EditVideoModal
						onClose={handleCloseUploadModal}
						videoId={createDraftVideoStatus.data.id}
						footerLeftElement={
							<VideoUploadStatus
								isUploading={uploadFileStatus.isLoading}
								isSuccess={uploadFileStatus.isSuccess}
								progress={uploadFileStatus.progress}
							/>
						}
						isUploading={uploadFileStatus.isLoading}
					/>
				) : (
					<UploadVideoModal
						onClose={handleCloseUploadModal}
						onSelectFiles={handleFileChange}
						isLoading={createDraftVideoStatus.isLoading}
					/>
				))}
		</header>
	);
};

export default Header;
