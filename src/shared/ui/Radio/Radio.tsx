import cn from "classnames";
import React from "react";

import { RadioProps } from "./Radio.interface";
import styles from "./Radio.module.scss";

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
	const { title, description, className, ...radioInputAttributes } = props;

	return (
		<label className={cn(styles.radio, className)}>
			<input
				ref={ref}
				className={styles.radio__input}
				type="radio"
				{...radioInputAttributes}
			/>

			<div className={styles.radio__marker} />

			<div className={styles.radio__info}>
				<span className={styles["radio__info-title"]}>{title}</span>
				<span className={styles["radio__info-description"]}>{description}</span>
			</div>
		</label>
	);
});

Radio.displayName = "Radio";

export default Radio;
