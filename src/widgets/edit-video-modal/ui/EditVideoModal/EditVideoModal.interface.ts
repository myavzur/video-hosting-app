import { ModalProps } from "@/entities/modal";

import { IUpdateVideoBody, IVideo } from "@/shared/interfaces/video.interface";

export interface EditVideoModalProps extends Pick<ModalProps, "onClose"> {
	videoId: IVideo["id"];
	footerLeftElement?: React.ReactNode;
	isUploading?: boolean;
}

// * In inputs there are only string values.
export type EditVideoModalForm = Omit<IUpdateVideoBody, "id">;
