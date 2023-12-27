import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Namespaces } from "@/shared/constants/store.constants";
import { INotification } from "@/shared/interfaces/notification.interface";

import { NotificationsState } from "./notifications.interface";

const initialState: NotificationsState = {
	notifications: []
};

export const notificationsSlice = createSlice({
	name: Namespaces.notificationsSlice,
	initialState,
	reducers: {
		addNotification: (state, action: PayloadAction<INotification>) => {
			state.notifications.unshift(action.payload);
		},
		deleteNotification: (state, action: PayloadAction<INotification["id"]>) => {
			state.notifications = state.notifications.filter(
				notification => notification.id !== action.payload
			);
		}
	}
});
