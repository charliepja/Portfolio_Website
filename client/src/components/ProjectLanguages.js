import React, { Component } from 'react';

class ProjectLanguages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: '',
			frameworks: '',
			databases: '',
		}
	}

	componentDidMount() {
		const { languages } = this.props;
		const programLangs = [];
		const frameworks = [];
		const databases = [];

		for(const lang of languages) {
			const program = ['java', 'javascript', 'ruby'];
			const frame = ['sinatra', 'react.js', 'vue.js', 'express', 'discord.js'];
			const db = ['mongodb', 'postgres', 'sqlite'];

			if(program.includes(lang.toLowerCase())) {
				programLangs.push(lang);
			}
			else if (frame.includes(lang.toLowerCase())) {
				frameworks.push(lang);
			}
			else if(db.includes(lang.toLowerCase())) {
				databases.push(lang);
			}
		}

		this.setState({
			languages: programLangs.join(' '),
			frameworks: frameworks.join(' '),
			databases: databases.join(' ')
		});
	}


	render() {
		return (
			<div>
				<p>Language: {this.state.languages}
				<br />
				Framework: {this.state.frameworks}
				<br />
				Database: {this.state.databases}
				</p>
			</div>
		)
	}
}

export default ProjectLanguages;
