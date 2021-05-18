import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
	state = {
		userText: 'Some text',
	};

	changeText = (event) => {
		let newtext = event.target.value;
		this.setState({
			userText: newtext,
		});
	};

	render() {
		return (
			<div className='App'>
				<h3>{this.state.userText}</h3>
				<input type='text' name='userText' value={this.state.userText} onChange={this.changeText} />
				<TodoList />
			</div>
		);
	}
}

export default App;
