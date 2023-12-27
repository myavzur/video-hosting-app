import { ModalProps } from "@/entities/modal";

import { IVideo } from "@/shared/interfaces/video.interface";

export interface DeleteVideoModalProps extends Pick<ModalProps, "onClose"> {
	video: IVideo;
}
