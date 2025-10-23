import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollapsed: boolean
}

const initialState: InitialStateTypes = {
    isSidebarCollapsed: false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSideBarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        }
    }
});

export const { setIsSideBarCollapsed } = globalSlice.actions;

export default globalSlice.reducer;
