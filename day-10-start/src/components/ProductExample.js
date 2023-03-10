import React from 'react';
import { useState, useReducer } from 'react';

const ACTIONS = {
	ADD_PRODUCT: 'add-product',
	DELETE_PRODUCT: 'delete-product',
};

const ProductExample = () => {
	function reducer(products, action) {
		console.log(products);
		console.log(action);

		switch (action.type) {
			case ACTIONS.ADD_PRODUCT:
				return [
					...products,
					{
						id: Date.now(),
						name: action.payload.productName,
					},
				];
			case ACTIONS.DELETE_PRODUCT:
				return [
					...products.filter(
						(product) => product.id !== action.payload.id
					),
				];
			default:
				return products;
		}
	}

	const [products, dispatch] = useReducer(reducer, []);

	const [productName, setProductName] = useState('');

	function handleSubmit(event) {
		console.log('Hello you touched me hihi');
		event.preventDefault(); //avoid refreshing of the page
		console.log('Produt Name', productName);
		dispatch({
			type: ACTIONS.ADD_PRODUCT,
			payload: { productName: productName },
		});
		setProductName('');
	}
	function handleDeleteProduct(id) {
		console.log('Button Clicked');
		console.log(id);
		dispatch({
			type: ACTIONS.DELETE_PRODUCT,
			payload: { id: id },
		});
	}

	return (
		<div>
			<h1>Product List</h1>
			<form onSubmit={handleSubmit}>
				<div className="product__container">
					<label>Product Name</label>
					<input
						onChange={(event) =>
							setProductName(event.target.value)
						}
						type="text"
						placeholder="Please write the name of your product"
						value={productName}
					/>
				</div>
			</form>
			{/* <h1>{productName}</h1> */}
			<ul>
				{products.map((item) => {
					return (
						<li key={item.id}>
							<span>{item.name}</span>
							<button
								onClick={() => handleDeleteProduct(item.id)}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProductExample;
