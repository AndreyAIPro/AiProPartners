import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import Auth from "./pages/Auth/Auth";
import PathConstants from "./router/pathConstants";
import routes from "./router/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import RefLink from "./pages/RefLink/RefLink";
import Landing from "./pages/Landing/Landing";
import PartnershipAgreement from "./pages/PartnershipAgreement/PartnershipAgreement";
import BackToPrevious from "./pages/BackToPrevious/BackToprevious";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	AOS.init({
		duration: 1000,
		offset: 100,
	});

	const router = createBrowserRouter([
		{
			path: "*",
			element: <BackToPrevious />,
		},
		{
			element: <PrivateLayout />,
			children: routes,
		},
		{
			path: PathConstants.LOGIN,
			element: <Auth />,
		},
		{
			path: PathConstants.HOME,
			element: <Landing />,
		},
		{
			path: PathConstants.SIGNUP,
			element: <Auth />,
		},
		{
			path: PathConstants.RESET_PASSWORD,
			element: <ResetPassword />,
		},
		{
			path: PathConstants.PASSWORD_RECOVERY,
			element: <ResetPassword />,
		},
		{
			path: PathConstants.PARTNERREFLINK + PathConstants.REFCODE,
			element: <RefLink />,
		},
		{
			path: PathConstants.LOGIN + PathConstants.REFCODE,
			element: <Auth />,
		},
		{
			path: PathConstants.SIGNUP + PathConstants.REFCODE,
			element: <Auth />,
		},
		{
			path: PathConstants.HOME + PathConstants.REFCODE,
			element: <Landing />,
		},
		{
			path: PathConstants.PARTNERSHIP_AGREEMENT,
			element: <PartnershipAgreement />,
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
