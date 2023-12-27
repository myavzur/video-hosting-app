import { ImUpload } from "react-icons/im";

import { Modal, ModalHeader } from "@/entities/modal";

import { UploadField } from "@/shared/ui";

import { UploadVideoModalProps } from "./UploadVideoModal.interface";
import styles from "./UploadVideoModal.module.scss";

export const UploadVideoModal: React.FC<UploadVideoModalProps> = ({
	onClose,
	onSelectFiles,
	isLoading
}) => {
	return (
		<Modal
			size="lg"
			onClose={onClose}
			headerElement={<ModalHeader onClose={onClose}>Upload video</ModalHeader>}
		>
			<div className={styles["modal-upload-body"]}>
				<UploadField
					onSelectFiles={onSelectFiles}
					icon={ImUpload}
					title="Drag and Drop to upload video"
					isDisabled={isLoading}
					isLoading={isLoading}
					size="md"
				>
					Your <span className={styles["blue"]}> video </span> will be
					<span className={styles["blue"]}> private </span> until you publish them.
				</UploadField>
			</div>
		</Modal>
	);
};
