import React, { Component } from 'react';
import {
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

class AppNavBar extends Component {

	render() {
		return (
			<div className="nav navbar-expand-lg text-center">
				<div>
					<img src="/imgs/ghost_dance.gif" className="navImg rounded-circle mx-auto d-block" alt="person" />
				</div>
				<div className= "text-center navBio">
					<p>
					Hi!<br /><br />
					I'm Charlie, a Glasgow based software developer.<br /><br />
					I recently completed CodeClan's 16 week intensive Professional Software Development course where I was taught programming fundamentals via a hands on, interactive learning experience.
					During the course, fundamentals were taught by learning languages such as Ruby, JavaScript, and Java, and then put into practise by completing projects in each language.<br /><br />
					Currently this website is a WIP, and in future sprints I'll be adding features such as:<br />
					* Contact Me<br />
					* About Me<br />
					* Resume<br />
					* Project Details<br />
					* Current Project<br />
					</p>
				</div>
				<Nav className="mr-auto" vertical>
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
		)
	}
}

export default AppNavBar;
