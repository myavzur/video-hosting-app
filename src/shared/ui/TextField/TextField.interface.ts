import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: IconType;
	error?: string;
	preventErrorMessage?: boolean;
}
