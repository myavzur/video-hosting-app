import { ModalProps } from "@/entities/modal";

export interface UploadVideoModalProps extends Pick<ModalProps, "onClose"> {
	onSelectFiles: (files: FileList) => Promise<void>;
	isLoading: boolean;
}
