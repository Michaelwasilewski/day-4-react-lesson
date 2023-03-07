import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const Layout = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/products">Products</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
			<div>I am footer</div>
		</div>
	);
};

export default Layout;
