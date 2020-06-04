import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions.js';
import PropTypes from 'prop-types';

class ProjectList extends Component {

	componentDidMount() {
		this.props.getProjects();
	}

	render() {
		const { projects } = this.props.project;
		return (
			<Container>
				<ListGroup className='projectList' horizontal>
					{projects.map((project) => (
						<ListGroupItem className="text-center" key={project.id}>
							{project.name}
							<br />
							<Button className="projectBtn" color="primary" size="sm">
								Github
							</Button>
							<Button className="projectBtn" color="primary" size="sm">
								Website
							</Button>
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
