import React, { Component } from 'react';
import ProjectLanguages from './ProjectLanguages.js'

class Project extends Component {

	render() {
		const { project } = this.props
		return (
			<div>
				<img src={`${process.env.PUBLIC_URL}${project.img}`} alt="website" className="projectImg"/>
				<br />
				{project.name}
				<br />
				{project.description}
				<br />
				<br />
				<ProjectLanguages languages={project.languages} />
				<br />
				<a className="btn btn-primary projectBtn" href={project.github} role="button" size="sm">Github</a>
				<a className="btn btn-primary projectBtn" href={project.website} role="button" size="sm">Website</a>
			</div>
		)
	}
}

export default Project;
