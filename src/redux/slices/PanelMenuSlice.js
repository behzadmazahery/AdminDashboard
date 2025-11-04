import { createSlice } from "@reduxjs/toolkit";

export const panelMenuSlice = createSlice({
    name: "panelMenu",
    initialState: {
        isOpen: false,
        menuItems: [
            { id: 1, title: "داشبورد", path: "/dashboard", icon: "Home" },
            { id: 2, title: "محصولات", path: "/products", icon: "Box" },
            { id: 2, title: "موجودی انبار", path: "/wharehouse", icon: "Warehouse" },
            { id: 3, title: "سفارشات", path: "/orders", icon: "ShoppingCart" },
            { id: 4, title: "مشتریان", path: "/customers", icon: "Users" },
            { id: 5, title: "گزارشات", path: "/reports", icon: "BarChart3" },
            { id: 6, title: "تنظیمات", path: "/settings", icon: "Settings" },
        ],
    },
    reducers: {
        togglePanelMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { togglePanelMenu } = panelMenuSlice.actions;
export default panelMenuSlice.reducer;
