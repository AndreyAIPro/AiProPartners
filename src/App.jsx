/** @format */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PrivateLayout from './layouts/PrivateLayout/PrivateLayout';
import routes from './router/routes';
import Auth from './pages/Auth/Auth';

function App() {
	const router = createBrowserRouter([
		{
			element: <PrivateLayout />,
			children: routes,
		},
		{
			path: '/login',
			element: <Auth />
		},
		{
			path: '/signup',
			element: <Auth />
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
