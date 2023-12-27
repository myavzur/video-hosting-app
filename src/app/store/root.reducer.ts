import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer as notificationsReducer } from "@/entities/notification";

import { Namespaces } from "@/shared/constants/store.constants";
import { reducer as optionsReducer } from "@/shared/model/options.slice";
import { api } from "@/shared/model/root.api";

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	notifications: notificationsReducer,
	options: optionsReducer
});

export const persistedReducer = persistReducer(
	{
		key: "root",
		storage: storage,
		whitelist: [Namespaces.optionsSlice]
	},
	rootReducer
);
