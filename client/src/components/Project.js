import React, { Component } from 'react';

class Project extends Component {

	render() {
		const { project } = this.props
		return (
			<div>
				<img src={`${process.env.PUBLIC_URL}${project.img}`} alt="website image" className="projectImg"/>
				<br />
				{project.name}
				<br />
				{project.description}
				<br />
				<a className="btn btn-primary projectBtn" href={project.github} role="button" size="sm">Github</a>
				<a className="btn btn-primary projectBtn" href={project.website} role="button" size="sm">Website</a>
			</div>
		)
	}
}

export default Project;
