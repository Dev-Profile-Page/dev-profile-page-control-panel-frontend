import * as React from "react";

import styles from './Navbar.module.css';
import { NavItemProps, NavbarProps } from "./Navbar.types";
import { Popover } from "react-tiny-popover";
import { NavLink, useMatch } from "react-router-dom";

export function Navbar({
    menus = [],
}: NavbarProps) {
    return (
        <div className={styles.navbar}>
            {
                menus.map((menu) => (
                    <NavItem icon={menu.icon} title={menu.name} path={menu.path} action={menu.action} />
                ))
            }
        </div>
    );
}

export function NavItem({icon: Icon, title, action, path }: NavItemProps) {
    const [ isPopoverOpen, setIsPopoverOpen ] = React.useState(false);

    const match = useMatch(path || '');
    let isActive = Boolean(match);

    let className = styles.navitem;

    if(isActive) {
        className += ` ${styles['navitem-active']}`;
    }

    return (
        <NavItemWrapper
                path={path}
                action={action}
            >
                <Popover isOpen={isPopoverOpen} content={<NavItemPopoverContent title={title || ''} />}>
                    <div
                        className={className}
                        onMouseEnter={() => setIsPopoverOpen(true)}
                        onMouseLeave={() => setIsPopoverOpen(false)}
                    >
                        <Icon isActive={isActive} />
                    </div>
                </Popover>
            </NavItemWrapper>
    );
}

type NavItemPopoverContentProps = {
    title: string,
};

function NavItemPopoverContent({ title }: NavItemPopoverContentProps) {
    return (
        <div className={styles.navItemPopoverContent}>{ title }</div>
    );
}

export type NavItemWrapperProps = {
    
} & Pick<NavItemProps, 'path' | 'action'> & React.PropsWithChildren;

function NavItemWrapper({ path, action, children }: NavItemWrapperProps) {
    if(path) {
        return (
            <NavLink to={path}>
                {children}
            </NavLink>
        );
    }

    if(action) {
        return (
            <div onClick={action}>
                {children}
            </div>
        );
    }

    return children;
}