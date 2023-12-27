import { alertApiError } from "./notifications.actions";
import { notificationsSlice } from "./notifications.slice";

export const reducer = notificationsSlice.reducer;

export const notificationsModel = {
	...notificationsSlice.actions,
	alertApiError
};
