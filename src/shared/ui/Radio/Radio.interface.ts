import { InputHTMLAttributes } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string;
	description?: string;
	className?: string;
}
