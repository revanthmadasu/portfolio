import { Nav, Navbar } from 'react-bootstrap';
import NavItem from './NavItem';
import ExternalLinks from "./external-links";
import React from 'react';
import "./NavBar.scss";
import { navItems } from 'data/navItems';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
export function NavBar() {
    const navItemTags = navItems.map(item => <NavItem navTitle={item.navTitle} navIcon={item.navIcon} navLink={item.navLink}></NavItem>);
    const navClass = classNames(
        "nav-container",
        "text-center",
        "position-fixed",
        "w-100",
        {
            "nav-container-desktop": !isMobile,
            "nav-container-mobile": isMobile,
            "w3-animate-top": !isMobile,
            "pt-3": !isMobile,
            "w3-animate-bottom": isMobile,
        }
    );
    return (
        <React.Fragment>
            <div className={navClass}>
                {navItemTags}
                <span className="d-inline-block float-right mr-lg-5 mr-md-4 mr-sm-2">
                    <ExternalLinks></ExternalLinks>
                </span>
            </div>
        </React.Fragment>

    )
}