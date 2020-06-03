import React, { Component } from 'react';
import {
	Collapse,
	NavBar,
	NavBarToggler,
	NavBarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
	}
}

export default NavBar;
