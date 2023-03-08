import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const Layout = () => {
	return (
		<div>
			<Outlet />
			<div>I am footer</div>
		</div>
	);
};

export default Layout;
