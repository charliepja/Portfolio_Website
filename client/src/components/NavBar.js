import React, { Component } from 'react';
import {
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

class AppNavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="nav text-center">
				<div>
					<img src="https://i.imgur.com/TAmWSEW.gif" className="navImg rounded-circle mx-auto d-block" alt="picture of person" />
				</div>
				<div className= "text-center navBio">
					<p>Hi! I'm Charlie, and I'm a developer!</p>
				</div>
				<Nav className="mr-auto" vertical>
					<NavItem>
						<NavLink href="/" className="navText">
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/" className="navText">
							Github
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/" className="navText">
							LinkedIn
						</NavLink>
					</NavItem>
				</Nav>
			</div>
		)
	}
}

export default AppNavBar;
