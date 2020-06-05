import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions.js';
import PropTypes from 'prop-types';
import Project from './Project.js';

class ProjectList extends Component {

	componentDidMount() {
		this.props.getProjects();
	}

	render() {
		const { projects } = this.props.project;
		return (
			<Container>
				<ListGroup className='projectList d-flex flex-wrap' horizontal>
					{projects.map((project) => (
						<ListGroupItem className="text-center" key={project.id}>
							<Project project={project} />
						</ListGroupItem>
					))}
				</ListGroup>
			</Container>
		)
	}
}

ProjectList.propTypes = {
	getProjects: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	project: state.project
});

export default connect(mapStateToProps, { getProjects })(ProjectList);
