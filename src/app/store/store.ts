import { configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistStore
} from "redux-persist";

import { api } from "@/shared/model/root.api";

import { apiErrorsMiddleware } from "../middlewares/api-errors.middleware";

import { persistedReducer } from "./root.reducer";

export const store = configureStore({
	devTools: process.env.NODE_ENV !== "production", // Disable in Prod
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] // ? Overwise RTK would conflict with Redux-Persist
			}
		})
			.concat(apiErrorsMiddleware)
			.concat(api.middleware) // Redux Thunk and others included
});

export const persistor = persistStore(store);

export type IStoreState = ReturnType<typeof store.getState>;
export type IStoreDispatch = typeof store.dispatch;
