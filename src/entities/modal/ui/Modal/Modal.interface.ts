export interface ModalProps {
	size?: "sm" | "base" | "lg";
	onClose: () => void;
	headerElement?: React.ReactNode;
	children: React.ReactNode;
	footerElement?: React.ReactNode;
}
