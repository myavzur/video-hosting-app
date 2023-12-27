import React from "react";

import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.loader__text}>
				<div className={styles["loader__text-letter"]}>L</div>
				<div className={styles["loader__text-letter"]}>O</div>
				<div className={styles["loader__text-letter"]}>A</div>
				<div className={styles["loader__text-letter"]}>D</div>
				<div className={styles["loader__text-letter"]}>I</div>
				<div className={styles["loader__text-letter"]}>N</div>
				<div className={styles["loader__text-letter"]}>G</div>

				<div className={styles["loader__text-letter"]}>.</div>
				<div className={styles["loader__text-letter"]}>.</div>
				<div className={styles["loader__text-letter"]}>.</div>
			</div>
		</div>
	);
};

export default Loader;
