import React, { useState, useEffect } from 'react';

const ShowingMessage = () => {
	useEffect(() => {
		const timeId = setInterval(() => {
			console.log('Timer is running');
		}, 1000);

		return () => {
			clearInterval(timeId);
		};
	}, []);

	return <div>Hello i am show brow</div>;
};

const SecondExample = () => {
	const [showComponent, setShowComponent] = useState(true);
	function handleBtnClick() {
		setShowComponent(false);
	}

	return (
		<div>
			{showComponent ? <ShowingMessage /> : null}
			<button onClick={handleBtnClick}>
				Hide Show component
			</button>
		</div>
	);
};

export default SecondExample;
