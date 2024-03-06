/** @format */

import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import Auth from "./pages/Auth/Auth";
import PathConstants from "./router/pathConstants";
import routes from "./router/routes";

function App() {
	AOS.init({
		duration: 1000,
		offset: 100,
	});

	const router = createBrowserRouter([
		{
			element: <PrivateLayout />,
			children: routes,
		},
		{
			path: PathConstants.LOGIN,
			element: <Auth />,
		},
		{
			path: PathConstants.SIGNUP,
			element: <Auth />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
