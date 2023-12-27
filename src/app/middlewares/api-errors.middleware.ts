import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit";

import { notificationsModel } from "@/entities/notification";

const HTTP_STATUS_CODE_UNAUTHORIZED = 401;

export const apiErrorsMiddleware: Middleware = () => next => action => {
	if (isRejectedWithValue(action)) {
		if (action.payload?.status === HTTP_STATUS_CODE_UNAUTHORIZED) {
			return next(action);
		}

		notificationsModel.alertApiError(action.payload);
	}

	return next(action);
};
