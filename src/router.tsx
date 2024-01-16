import * as React from 'react';

import { RouteObject, createBrowserRouter } from "react-router-dom";

import { menus } from "./constants";
import { ErrorPage } from "./pages/ErrorPage";
import { AuthPage } from './pages/Auth/Auth';
import { AuthCallbackPage } from './pages/AuthCallback';

const routes: RouteObject[] = [
    {
        index: true,
        Component: AuthPage,
        errorElement: <ErrorPage />,
    },

    {
        path: '/auth-callback',
        Component: AuthCallbackPage,
        errorElement: <ErrorPage />,
    },

    ...menus
        .filter(menu => menu.component !== undefined)
        .map(menu => ({
            path: menu.path,
            Component: menu.component,
            errorElement: <ErrorPage />,
        })),
];

export const router = createBrowserRouter([
    ...routes,
]);