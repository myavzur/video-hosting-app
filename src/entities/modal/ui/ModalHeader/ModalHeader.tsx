import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { ModalHeaderProps } from "./ModalHeader.interface";
import styles from "./ModalHeader.module.scss";

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose, children }) => {
	return (
		<div className={styles.header}>
			<span className={styles.header__title}>{children}</span>

			<button
				className={styles.header__close}
				onClick={onClose}
			>
				<AiOutlineClose />
			</button>
		</div>
	);
};

export default ModalHeader;
