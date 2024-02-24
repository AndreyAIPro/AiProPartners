/** @format */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PrivateLayout from './layouts/PrivateLayout/PrivateLayout';
import routes from './router/routes';

function App() {
	const router = createBrowserRouter([
		{
			element: <PrivateLayout />,
			children: routes,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
