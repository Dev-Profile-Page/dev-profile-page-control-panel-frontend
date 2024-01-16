import * as React from "react";

import { NavLink, useLocation, useMatch, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from './Navbar.module.css';
import { NavItemProps, NavbarProps } from "./Navbar.types";
import { Popover } from "react-tiny-popover";

export function Navbar({
    menus = [],
}: NavbarProps) {
    return (
        <div className={styles.navbar}>
            {
                menus.map((menu) => (
                    <NavItem key={menu.name} icon={menu.icon} title={menu.name} path={menu.path} action={menu.action} />
                ))
            }
        </div>
    );
}

export function NavItem({icon: Icon, title, action, path }: NavItemProps) {
    const [ isPopoverOpen, setIsPopoverOpen ] = React.useState(false);

    const match = useMatch(path || '<noroute>');
    const location = useLocation();

    let isActive = Boolean(match);

    if(location.pathname === '/' && title === 'Dashboard') {
        isActive = true;
    }

    let className = styles.navitem;

    if(isActive) {
        className += ` ${styles['navitem-active']}`;
    }

    return (
        <NavItemWrapper
                path={path}
                action={action}
                title={title}
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
    
} & Pick<NavItemProps, 'path' | 'action' | 'title'> & React.PropsWithChildren;

function NavItemWrapper({ title, path, action, children }: NavItemWrapperProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if(path) {
        return (
            <NavLink to={path}>
                {children}
            </NavLink>
        );
    }

    function onClickHandler(name: string) {
        if(action) {
            if(name === 'Logout') {
                action(dispatch, navigate);
            }
        }
    }

    if(action) {
        return (
            <div onClick={() => onClickHandler(title)}>
                {children}
            </div>
        );
    }

    return children;
}