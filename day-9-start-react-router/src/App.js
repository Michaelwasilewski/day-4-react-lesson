import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import NotFound from './Components/404';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
function App() {
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

			<>
				<Routes>
					<Route path="/" element={<Layout />} />
					<Route index element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route
						path="product/:id"
						element={<ProductDetails />}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</>
			<Footer />
		</div>
	);
}

export default App;
