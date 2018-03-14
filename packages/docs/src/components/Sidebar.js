import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const activeClassName = 'font-bold text-black cursor-default no-underline';
const NavItem = (props) => <NavLink {...props} className="block mb-2" activeClassName={activeClassName} />;

export default class Sidebar extends Component {
	render() {
		return (
			<div className="flex-shrink bg-grey-lightest p-4" style={{ minWidth: 300 }}>
        		{/* <NavItem to="/" exact>Home</NavItem> */}
        		<NavItem to="/transitions">Transitions</NavItem>

        		<hr className="my-8 border-t border-grey-light" />

        		<div className="text-grey italics">
        			Coming soon: Bootstrap-compatible component plugins.
        		</div>
			</div>
		);
	}
}
