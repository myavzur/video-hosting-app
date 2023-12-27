import cn from "classnames";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { useOutside } from "@/shared/lib/hooks";

import { ModalProps } from "./Modal.interface";
import styles from "./Modal.module.scss";

const Modal: React.FC<ModalProps> = ({
	size = "base",
	onClose,
	headerElement,
	children,
	footerElement
}) => {
	const [modalRef] = useOutside({ onDisappear: onClose });
	const modalsContainerElement = document.getElementById("modals-container");

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	if (!modalsContainerElement) {
		return null;
	}

	const modalContent = (
		<div
			className={cn(styles.modal, {
				[styles[`modal--${size}`]]: size
			})}
		>
			<div
				className={styles.modal__dialog}
				ref={modalRef}
			>
				{headerElement && (
					<div className={styles.modal__header}>{headerElement}</div>
				)}

				<div className={styles.modal__content}>{children}</div>

				{footerElement && (
					<div className={styles.modal__footer}>{footerElement}</div>
				)}
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, modalsContainerElement);
};

export default Modal;
