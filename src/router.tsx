import * as React from 'react';

import { RouteObject, createBrowserRouter } from "react-router-dom";

import { menus } from "./constants";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { ErrorPage } from "./pages/ErrorPage";
import App from './App';
import { AuthPage } from './pages/Auth/Auth';

const routes: RouteObject[] = [
    {
        index: true,
        Component: AuthPage,
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
        path: '/',
        Component: App,
        children: routes
    }
]);