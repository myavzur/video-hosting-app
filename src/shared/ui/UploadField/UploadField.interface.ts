import { IconType } from "react-icons";

export interface UploadFieldProps {
	onSelectFiles: (files: FileList) => void;
	icon?: IconType;
	title?: string;
	children?: React.ReactNode;
	isDisabled?: boolean;
	isLoading?: boolean;
	size?: "sm" | "md";
	className?: string;
}
