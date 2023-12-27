import classNames from "classnames";
import React from "react";

import { CheckboxProps } from "./Checkbox.interface";
import styles from "./Checkbox.module.scss";

const Checkbox: React.FC<CheckboxProps> = props => {
	const { title, className, ...checkboxInputAttributes } = props;

	return (
		<label className={classNames(styles.checkbox, className)}>
			<input
				{...checkboxInputAttributes}
				className={styles.checkbox__input}
				type="checkbox"
			/>

			<div className={styles.checkbox__marker} />

			<div className={styles.checkbox__info}>
				<span className={styles["checkbox__info-title"]}>{title}</span>
			</div>
		</label>
	);
};

export default Checkbox;
