import Image from "next/image";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiFillSave } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import useMeasure from "react-use-measure";

import { Modal, ModalHeader } from "@/entities/modal";
import { Player } from "@/entities/player";
import { videoApi } from "@/entities/video";

import { VideoPrivacy } from "@/shared/interfaces/video.interface";
import { useUploadFile } from "@/shared/lib/hooks";
import {
	Button,
	Loader,
	Radio,
	TextArea,
	TextField,
	TextLink,
	UploadField
} from "@/shared/ui";

import { EditVideoModalForm, EditVideoModalProps } from "./EditVideoModal.interface";
import styles from "./EditVideoModal.module.scss";

const radioOptions = [
	{
		value: VideoPrivacy.PRIVATE,
		title: "Private",
		description: "Only you can watch your video"
	},
	{
		value: VideoPrivacy.UNLISTED,
		title: "Unlisted",
		description: "Anyone with the video link can watch your video"
	},
	{
		value: VideoPrivacy.PUBLIC,
		title: "Public",
		description: "Everyone can watch your video"
	}
];

const EditVideoModal: React.FC<EditVideoModalProps> = ({
	videoId,
	onClose,
	footerLeftElement,
	isUploading
}) => {
	const {
		data: video,
		isLoading,
		refetch: refetchVideo
	} = videoApi.useGetVideoByIdQuery(videoId);
	const [updateVideo] = videoApi.useUpdateVideoMutation();

	const [uploadFile, uploadFileStatus] = useUploadFile({
		url: "/videos/upload-thumbnail"
	});

	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
		watch,
		reset
	} = useForm<EditVideoModalForm>({
		mode: "onChange"
	});

	const watchName = watch("name");
	const watchPrivacy = watch("privacy");

	// * Measures
	const [alignmentContainerRef, alignmentContainerBounds] = useMeasure();

	// * Refetch video after it was uploaded
	useEffect(() => {
		refetchVideo();
	}, [refetchVideo, isUploading, uploadFileStatus.isSuccess]);

	// * Set default form values on video fetch success.
	useEffect(() => {
		if (video) {
			reset({
				name: video.name,
				description: video.description,
				privacy: (String(video.privacy) || VideoPrivacy.PRIVATE) as VideoPrivacy,
				thumbnailPath: video.thumbnailPath
			});
		}
	}, [reset, video]);

	const handleUpdateVideo: SubmitHandler<EditVideoModalForm> = data => {
		if (video && isValid) {
			updateVideo({
				...data,
				privacy: Number(data.privacy),
				id: video.id
			}).then(() => onClose());
		}
	};

	const handleThumbnailChange = async (files: FileList) => {
		if (video?.id) {
			const file = files[0];

			const formData = new FormData();
			formData.append("thumbnail", file);
			formData.append("videoId", String(video.id));

			await uploadFile(formData);
		}
	};

	return (
		<Modal
			size="lg"
			onClose={onClose}
			headerElement={<ModalHeader onClose={onClose}>{watchName}</ModalHeader>}
			footerElement={
				<div className={styles.editor__footer}>
					{footerLeftElement && (
						<div className={styles["editor__footer-left"]}>{footerLeftElement}</div>
					)}

					<div className={styles["editor__footer-right"]}>
						<Button
							icon={AiFillSave}
							kind="secondary"
							hint="Save video with current presets"
							type="submit"
							form="video-form"
						>
							Save
						</Button>
					</div>
				</div>
			}
		>
			<div className={styles.editor}>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<form
							id="video-form"
							onSubmit={handleSubmit(handleUpdateVideo)}
							className={styles.editor__form}
						>
							<div
								className={styles["editor__alignment-container"]}
								ref={alignmentContainerRef}
							>
								<section className={styles.editor__row}>
									<TextField
										className={styles.editor__field}
										{...register("name", {
											minLength: 1,
											maxLength: 150,
											required: "Video title is required"
										})}
										placeholder="Add a title that describes your video"
										error={errors.name?.message}
									/>
								</section>

								<section className={styles.editor__row}>
									<TextArea
										className={styles.editor__field}
										rows={6}
										{...register("description", {
											maxLength: {
												value: 1000,
												message: "Your description is too long"
											}
										})}
										placeholder="Tell viewers about your video"
										error={errors.description?.message}
									/>
								</section>

								<section className={styles.editor__row}>
									<div className={styles.editor__thumbnails}>
										{video?.thumbnailPath && (
											<Image
												className={styles["editor__thumbnails-thumbnail"]}
												height={100}
												width={170}
												src={video.thumbnailPath}
												alt={video.name}
											/>
										)}

										<UploadField
											className={styles["editor__thumbnails-thumbnail"]}
											onSelectFiles={handleThumbnailChange}
											icon={BsFillImageFill}
											size="sm"
										/>
									</div>
								</section>
							</div>

							<section
								className={styles.editor__row}
								style={{
									display: "flex",
									flexDirection: "column"
								}}
							>
								{radioOptions.map(option => (
									<Radio
										className={styles.radio}
										key={option.value}
										{...register("privacy")}
										value={option.value}
										defaultChecked={watchPrivacy === option.value}
										description={option.description}
										title={option.title}
									/>
								))}
							</section>
						</form>

						<div
							className={styles.editor__video}
							style={{ height: alignmentContainerBounds.height }}
						>
							<div className={styles["editor__video-player"]}>
								{video?.videoPath && (
									<Player
										poster={video.thumbnailPath}
										src={video.videoPath}
									/>
								)}
							</div>

							<div className={styles["video-info"]}>
								<div className={styles["video-info__row"]}>
									<div className={styles["video-info__row-field"]}>Link</div>
									<div className={styles["video-info__row-value"]}>
										<TextLink href={`/videos/${video?.id}`}>
											{`${process.env.CLIENT_URL}/videos/${video?.id}`}
										</TextLink>
									</div>
								</div>

								<div className={styles["video-info__row"]}>
									<div className={styles["video-info__row-field"]}>Filename</div>
									<div className={styles["video-info__row-value"]}>
										{video?.originalFileName}
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</Modal>
	);
};

export default EditVideoModal;
