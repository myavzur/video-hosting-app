import { notificationsModel } from ".";
import { nanoid } from "@reduxjs/toolkit";

import { store } from "@/app/store";

import { getApiErrorMessage } from "@/shared/lib/helpers";

export const alertApiError = (error: any) => {
	const message = getApiErrorMessage(error);

	store.dispatch(
		notificationsModel.addNotification({
			id: nanoid(),
			type: "error",
			message,
			timer: 5000
		})
	);

	throw message;
};
