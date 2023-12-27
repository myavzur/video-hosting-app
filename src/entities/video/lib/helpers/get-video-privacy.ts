import { AiFillEye, AiOutlineLink, AiOutlineQuestion } from "react-icons/ai";
import { TbShieldLockFilled } from "react-icons/tb";

import { VideoPrivacy } from "@/shared/interfaces/video.interface";

export const getVideoPrivacy = (privacy?: VideoPrivacy) => {
	if (privacy === 0) return { icon: TbShieldLockFilled, label: "Private" };
	if (privacy === 1) return { icon: AiOutlineLink, label: "Unlisted" };
	if (privacy === 2) return { icon: AiFillEye, label: "Public" };

	return { icon: AiOutlineQuestion, label: "Unknown" };
};
