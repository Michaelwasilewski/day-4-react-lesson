import './App.css';

const products = [
	{ id: 0, name: 'Milk', price: '49 Nok' },
	{ id: 1, name: 'Candy', price: '20 Nok' },
	{ id: 2, name: 'Chips', price: '49 Nok' },
	{ id: 3, name: 'Chocolate', price: '45 Nok' },
	{ id: 4, name: 'Battery', price: '25 Nok' },
];

function App() {
	const productList = products.map(
		({ name, price, id }, index) => {
			if (index >= 2) {
				return null;
			}
			return (
				<li key={id}>
					<span>Name {name}</span>
					<span>price {price}</span>
				</li>
			);
		}
	);
	return (
		<div className="App">
			<ul>{productList}</ul>
		</div>
	);
}

export default App;
