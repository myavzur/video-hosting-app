import cn from "classnames";
import React, { forwardRef } from "react";

import styles from "@/shared/styles/Field.module.scss";

import { TextFieldProps } from "./TextField.interface";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{ icon: Icon, error, className, preventErrorMessage, ...inputAttributes },
		ref
	) => {
		return (
			<div className={cn(styles.field, className)}>
				{!preventErrorMessage && Boolean(error) && (
					<p className={styles.field__error}>{error}</p>
				)}

				<label
					className={cn(styles.field__input, {
						[styles["field__input--error"]]: error,
						[styles["field__input--with-icon"]]: Boolean(Icon)
					})}
				>
					{Icon && <Icon className={styles["field__input-icon"]} />}

					<input
						{...inputAttributes}
						ref={ref}
						className={styles["field__input-real"]}
					/>
				</label>
			</div>
		);
	}
);

TextField.displayName = "TextField";

export default TextField;
