import * as React from "react";
import { IconProps } from "../Icons/Icons";

export type Menu = {
    name: string,
    icon: React.ComponentType<IconProps>,
    path?: string,
    action?: React.EventHandler<any>,
    component?: React.ComponentType<any>,
};

export type NavbarProps = {
    menus: Menu[]
};

export type NavItemProps = {
    isActive: boolean,
    title?: string,
} & Pick<Menu, 'icon' | 'path' | 'action'>;
