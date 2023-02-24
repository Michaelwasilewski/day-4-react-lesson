import './App.css';

function App() {
	let isLoggedIn = true;

	let content;

	if (isLoggedIn) {
		content = (
			<div>
				<h1>Profile</h1>
				<ul>
					<li>Name: Jack</li>
					<li>Age: 28</li>
					<li>Phone Number: 94101190</li>
					<li>Call for a good time bby </li>
				</ul>
			</div>
		);
	} else {
		<div>Login Form</div>;
	}

	return (
		<div className="App">
			<div>
				{content}
				{/* Ternary operator */}
				<div>
					{isLoggedIn ? (
						<div>Profile component</div>
					) : (
						<div>Sign in Component</div>
					)}
				</div>
			</div>
			{/* Logical operators example */}
			<div>
				{isLoggedIn && <div>Profile component</div>}
			</div>
			<div>
				{!isLoggedIn && <div>Sign in Component</div>}
			</div>
		</div>
	);
}

export default App;
