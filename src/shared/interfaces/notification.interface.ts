export interface INotification {
	id: string;
	type?: "error" | "success" | "warning" | "info";
	message: string;
	/** Timer before delete (in seconds) */
	timer: number;
}
