import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Namespaces } from "@/shared/constants/store.constants";
import { ITheme } from "@/shared/interfaces/theme.interface";

import { OptionsState } from "./options.interface";

const initialState: OptionsState = {
	theme: "dark"
};

const optionsSlice = createSlice({
	name: Namespaces.optionsSlice,
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<ITheme>) => {
			state.theme = action.payload;
		}
	}
});

export const reducer = optionsSlice.reducer;
export const optionsModel = {
	...optionsSlice.actions
};
