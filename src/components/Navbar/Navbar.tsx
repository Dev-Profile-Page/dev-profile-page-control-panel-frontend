import * as React from "react";

import styles from './Navbar.module.css';
import { NavItemProps, NavbarProps } from "./Navbar.types";
import { Popover } from "react-tiny-popover";

// TODO: Handle routes from 'path' prop and handle actions defined in 'action' prop of Menu object
export function Navbar({
    menus = [],
}: NavbarProps) {
    return (
        <div className={styles.navbar}>
            {
                menus.map((menu) => (
                    <NavItem isActive={false} icon={menu.icon} title={menu.name} />
                ))
            }
        </div>
    );
}

export function NavItem({ isActive, icon: Icon, title }: NavItemProps) {
    const [ isPopoverOpen, setIsPopoverOpen ] = React.useState(false);

    let className = styles.navitem;

    if(isActive) {
        className += ` ${styles['navitem-active']}`;
    }

    return (
        <Popover isOpen={isPopoverOpen} content={<NavItemPopoverContent title={title || ''} />}>
            <div
                className={className}
                onMouseEnter={() => setIsPopoverOpen(true)}
                onMouseLeave={() => setIsPopoverOpen(false)}
            >
                <Icon isActive={isActive} />
            </div>
        </Popover>
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