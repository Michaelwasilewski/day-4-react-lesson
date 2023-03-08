import React, { useState, useEffect } from 'react';

const FirstExample = () => {
	const [resourceType, setResourceType] =
		useState('photos');
	const [items, setItems] = useState([]);

	useEffect(() => {
		console.log('resourceTypeChanged');
		fetch(
			`https://jsonplaceholder.typicode.com/${resourceType}`
		)
			.then((response) => response.json())
			.then((jsonData) => {
				console.log('jsonData ', jsonData);
				setItems(jsonData);
			});
	}, [resourceType]);

	return (
		<>
			<div>
				<button onClick={() => setResourceType('albums')}>
					Albums
				</button>
				<button onClick={() => setResourceType('photos')}>
					Photo
				</button>
				<button on onClick={() => setResourceType('todos')}>
					Todos
				</button>
			</div>
			<h1>{resourceType}</h1>
			{items.map((item) => {
				return (
					<ul key={item.id}>
						<li>{item.id}</li>
						<li>{item.title}</li>
					</ul>
				);
			})}
		</>
	);
};

export default FirstExample;
