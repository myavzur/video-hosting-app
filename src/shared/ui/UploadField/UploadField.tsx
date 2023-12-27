import cn from "classnames";
import React, { useState } from "react";

import { UploadFieldProps } from "./UploadField.interface";
import styles from "./UploadField.module.scss";

const UploadField: React.FC<UploadFieldProps> = ({
	onSelectFiles,
	icon: Icon,
	title,
	children,
	className,
	isDisabled,
	isLoading,
	size = "md"
}) => {
	const [isDragging, setDragging] = useState(false);

	const handleDragStart = (e: React.DragEvent<HTMLLabelElement>) => {
		e.preventDefault();
		setDragging(true);
	};

	const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
		e.preventDefault();
		setDragging(false);
	};

	const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
		e.preventDefault();
		setDragging(false);
		onSelectFiles(e.dataTransfer.files);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (!files?.length) return null;

		onSelectFiles(files);
	};

	return (
		<label
			className={cn(
				styles.field,
				{ [styles["field--dragging"]]: isDragging },
				{ [styles["field--loading"]]: isLoading },
				{ [styles[`field--size-${size}`]]: Boolean(size) },
				className
			)}
			onDragStart={handleDragStart}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragStart}
			onDrop={handleDrop}
		>
			<div className={styles.field__info}>
				{Icon && <Icon className={styles["field__info-icon"]} />}

				{title && <span className={styles["field__info-title"]}>{title}</span>}

				{children && <p className={styles["field__info-verbose"]}>{children}</p>}
			</div>

			<input
				className={styles.field__input}
				type="file"
				disabled={isDisabled}
				onChange={handleChange}
			/>
		</label>
	);
};

export default UploadField;
