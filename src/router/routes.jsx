import Community from "../components/common/Community/Community";
import UsuallyArticles from "../components/common/UsuallyArticles/UsuallyArticles";
import Dashboard from "../pages/Dashboard/Dashboard";
import Finances from "../pages/Finances/Finances";
import Ref from "../pages/Ref/Ref";
import Study from "../pages/Study/Study";
import Subaccount from "../pages/Subaccount/Subaccount";
import PathConstants from "./pathConstants";
import Preferences from "../pages/Preferences/Preferences";
import { Navigate } from "react-router-dom";

const routes = [
	{
		path: PathConstants.DASHBOARD,
		element: <Dashboard />,
	},
	{
		path: PathConstants.SUBACCOUNT,
		element: <Subaccount />,
	},
	{
		path: PathConstants.FINANCES,
		element: <Finances />,
	},
	{
		path: PathConstants.REF,
		element: <Ref />,
	},
	{
		path: PathConstants.STUDY,
		element: <Study />,
		children: [
			{
				index: true,
				element: <Navigate to="community" replace />,
			},
			{
				path: "community",
				element: <Community />,
			},
			{
				path: "articles",
				element: <UsuallyArticles />,
			},
		],
	},

	{
		path: PathConstants.PREFERENCES,
		element: <Preferences />,
	},
];

export default routes;
