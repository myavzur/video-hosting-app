import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	kind?: "primary" | "secondary" | "tertiary";
	hint: string;
	icon?: IconType;
	children?: React.ReactNode;
	isActive?: boolean;
	size?: "xs";
}
