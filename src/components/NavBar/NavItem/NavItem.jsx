import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';
export default class NavItem extends React.Component {
    constructor() {
        super();
        this.state = {
            hovered: false
        };
    }
    activate() {
        this.hovered = true;
        console.log('activated');
    }
    deactivate() {
        this.hovered = false;
        console.log('de-activated');
    }
    render() {
        return (
            <span className={`nav-icon-container d-inline-block mx-2 ${this.props.navTitle}`}>
                <NavLink to={this.props.navLink} activeClassName="selected"
                    onMouseEnter={() => this.activate()} onMouseLeave={() => this.deactivate()}>
                    <i className={`nav-icon fa ${this.props.navIcon}`}></i>
                    {
                        this.state.hovered &&  
                        <span className="nav-title pr-2">{this.props.navTitle}</span>
                    }
                </NavLink>
            </span>
        )
    }
    set hovered(value){
        this.state.hovered = value;
        this.setState(this.state);
    }
}