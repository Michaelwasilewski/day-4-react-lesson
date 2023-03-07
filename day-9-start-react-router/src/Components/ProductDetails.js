import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	let params = useParams();
	console.log(params);

	return (
		<div>
			<h1>ProductDetails {params.id}</h1>
		</div>
	);
};

export default ProductDetails;
