import React, { forwardRef } from "react";
import { FaLock } from "react-icons/fa";

import TextField, { TextFieldProps } from "@/shared/ui/TextField";

const PasswordField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
	return (
		<TextField
			{...props}
			ref={ref}
			icon={FaLock}
			type="password"
			placeholder={props.placeholder || "Enter your Password"}
			autoComplete="new-off"
		/>
	);
});

PasswordField.displayName = "FieldPassword";

export default PasswordField;
