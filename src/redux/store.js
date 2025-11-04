import { configureStore } from "@reduxjs/toolkit";
import { panelMenuSlice } from "./slices/PanelMenuSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        panelMenuSlice: panelMenuSlice.reducer,
        theme: themeReducer,
    },
});