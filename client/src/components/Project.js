import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Project extends Component {

	render() {
		const { project } = this.props
		return (
			<div>
				<img src={project.img} />
				<br />
				{project.name}
				<br />
				{project.description}
				<br />
				<Button className="projectBtn" color="primary" size="sm">
					Github
				</Button>
				<Button className="projectBtn" color="primary" size="sm">
					Website
				</Button>
			</div>
		)
	}
}

export default Project;
