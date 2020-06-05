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
					<p>
					Hi!<br /><br />
					I'm Charlie, a Glasgow based software developer.<br /><br />
					I recently completed CodeClan's 16 week intenseive Professional Software Development course where I was taught programming fundamentals via a hands on, interactive learning experience.
					During the course, fundamentals were taught by learning languages such as Ruby, JavaScript, and Java, and then put into practise by completing projects in each language.<br />
					</p>
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
