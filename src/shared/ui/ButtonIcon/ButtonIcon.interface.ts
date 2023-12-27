import { ButtonHTMLAttributes } from "react";

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	hint: string;
	children: React.ReactNode;
}
