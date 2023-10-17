import * as React from 'react';

import { RouteObject, createBrowserRouter } from "react-router-dom";

import { menus } from "./constants";
import { Dashboard } from "./pages/Dashboard";
import { ErrorPage } from "./pages/ErrorPage";

const routes: RouteObject[] = [
    {
        index: true,
        Component: Dashboard,
    },

    ...menus
        .filter(menu => menu.component !== undefined)
        .map(menu => ({
            path: menu.path,
            Component: menu.component,
        })),
];

export const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        children: routes
    }
]);