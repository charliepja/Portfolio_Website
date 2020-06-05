import React, { Component } from 'react';
import AppNavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import { Provider } from 'react-redux';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gitHubTheme: {
				background: '#fff',
				text: '#000'
			}
		}
	}

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<AppNavBar />
					<ProjectList />
				</div>
			</Provider>
		);
	}
}

export default App;
