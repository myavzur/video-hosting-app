import cn from "classnames";
import React from "react";

import styles from "@/shared/styles/Field.module.scss";

import { TextAreaProps } from "./TextArea.interface";

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(props, ref) => {
		const { className, error, preventErrorMessage, ...textareaAttributes } = props;
		return (
			<div className={cn(styles.field, className)}>
				{!preventErrorMessage && <p className={styles.field__error}>{error}</p>}

				<label
					className={cn(styles.field__input, {
						[styles["field__input--error"]]: error
					})}
				>
					<textarea
						{...textareaAttributes}
						ref={ref}
						className={styles["field__input-real"]}
					/>
				</label>
			</div>
		);
	}
);

TextArea.displayName = "TextArea";

export default TextArea;
