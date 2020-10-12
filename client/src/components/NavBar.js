import React, { Component } from 'react';
import {
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

class AppNavBar extends Component {

	render() {
		return (
			<div className="maxView d-flex flex-column align-items-center">
			<div className="text-center">
				<div className="ml-1 p-3 imgDiv">
					<a href="/" target="_self"><img src="/imgs/charlie_logo.png" className="navImg" alt="person" /></a>
				</div>
				<div className="m-1 p-3">
					<Nav tabs>
						<NavItem>
							<NavLink href="/" className="navText">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/charliepja" target="_blank" className="navText">
								Github
								</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.linkedin.com/in/charlieanderson1993/" target="_blank" className="navText">
								LinkedIn
							</NavLink>
						</NavItem>
					</Nav>
				</div>
				<div className= "mx-1 p-3 text-center navBio">
					<p>
					I'm Charlie, a Glasgow based software developer.<br /><br />
					</p>
				</div>
			</div>
			</div>
		)
	}
}

export default AppNavBar;
