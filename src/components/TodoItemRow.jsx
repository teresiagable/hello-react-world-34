import React from 'react';

export default function TodoItemRow(prop) {
	return (
		<tr>
			<td>{prop.item.title}</td>
			<td>{prop.item.assignee.firstName}</td>
		</tr>
	);
}
