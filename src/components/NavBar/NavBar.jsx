import { Nav, Navbar } from 'react-bootstrap';
import NavItem from './NavItem/NavItem';
import ExternalLinks from "./external-links/external-links";
import React from 'react';
import "./NavBar.scss";
export function NavBar() {
    const navItems = [
        {
            navTitle: 'Home',
            navIcon: 'fa-home',
            navLink: '/home'
        },
        {
            navTitle: 'Skills',
            navIcon: 'fa-diamond',
            navLink: '/skills'
        },
        {
            navTitle: 'Experience',
            navIcon: 'fa-briefcase',
            navLink: '/experience'
        },
        {
            navTitle: 'Projects',
            navIcon: 'fa-file-code-o',
            navLink: '/projects'
        }
    ];
    const navItemTags = navItems.map(item => <NavItem navTitle={item.navTitle} navIcon={item.navIcon} navLink={item.navLink}></NavItem>)
    return (
        <React.Fragment>
            <div className="nav-container text-center position-fixed w-100 w3-animate-top pt-3">
                {navItemTags}
                <span className="d-inline-block float-right mr-lg-5 mr-md-4 mr-sm-2">
                    <ExternalLinks></ExternalLinks>
                </span>
            </div>
        </React.Fragment>

    )
}