import React, { useState } from "react";

import { Modal, ModalHeader } from "@/entities/modal";
import { VideoCard, videoApi } from "@/entities/video";

import { Button, Checkbox } from "@/shared/ui";

import { DeleteVideoModalProps } from "./DeleteVideoModal.interface";
import styles from "./DeleteVideoModal.module.scss";

const DeleteVideoModal: React.FC<DeleteVideoModalProps> = ({ video, onClose }) => {
	const [warningChecked, setWarningChecked] = useState(false);
	const [deleteVideo] = videoApi.useDeleteVideoMutation();

	const handleDelete = () => {
		if (warningChecked) {
			deleteVideo(video.id);
			onClose();
		}
	};

	return (
		<Modal
			size="sm"
			onClose={onClose}
			headerElement={
				<ModalHeader onClose={onClose}>Permanently delete this video?</ModalHeader>
			}
			footerElement={
				<div className={styles.footer}>
					<Button
						hint="Cancel deleting"
						kind="secondary"
						onClick={onClose}
					>
						Cancel
					</Button>

					<Button
						hint="Delete video"
						kind="primary"
						disabled={!warningChecked}
						onClick={handleDelete}
					>
						Delete
					</Button>
				</div>
			}
		>
			<div className={styles.delete}>
				<VideoCard
					video={video}
					kind="secondary"
					withPrivacyBadge={true}
				/>

				<Checkbox
					className={styles.delete__checkbox}
					defaultChecked={warningChecked}
					onChange={() => setWarningChecked(state => !state)}
					title="I understand that deleting is permanent and cannot be undone."
				/>
			</div>
		</Modal>
	);
};

export default DeleteVideoModal;
