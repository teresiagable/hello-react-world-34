import React, { Component } from 'react';
import TodoItemRow from './TodoItemRow';

export default class TodoList extends Component {
	state = {
		theData: [
			{
				id: '1',
				title: 'Finish Assignment!',
				done: false,
				assignee: {
					firstName: 'Simon',
					lastName: 'Elbrink',
				},
			},
			{
				id: '2',
				title: 'Create More Assignments!',
				done: false,
				assignee: {
					firstName: 'Teresia',
					lastName: 'Gable',
				},
			},
			{
				id: '3',
				title: 'Create More Exercises!',
				done: false,
				assignee: {
					firstName: 'Mehrdad',
					lastName: 'Javan',
				},
			},
		],
	};

	render() {
		return (
			<div>
				<table border='1'>
					<thead>
						<tr>
							<th colSpan='2'>Hello React world</th>
						</tr>
						<tr>
							<th>Title</th>
							<th>Assignee</th>
						</tr>
					</thead>
					<tbody>
						{this.state.theData.map((item) => (
							<TodoItemRow key={item.id} item={item} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
