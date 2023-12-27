import classNames from "classnames";
import React from "react";

import { DividerProps } from "./Divider.interface";
import styles from "./Divider.module.scss";

const Divider: React.FC<DividerProps> = ({ className }) => {
	return <div className={classNames(styles.divider, className)} />;
};

export default Divider;
