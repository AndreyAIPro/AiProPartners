
import Community from "../components/common/Community/Community";
import UsuallyArticles from "../components/common/UsuallyArticles/UsuallyArticles";
import Dashboard from "../pages/Dashboard/Dashboard";
import Finances from "../pages/Finances/Finances";
import Ref from "../pages/Ref/Ref";
import Study from "../pages/Study/Study";
import Subaccount from "../pages/Subaccount/Subaccount";
import PathConstants from "./pathConstants";
import Preferences from "../pages/Preferences/Preferences";
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
				path: "articles",
				element: <UsuallyArticles />,
			},
			{
				path: "community",
				element: <Community />,
			},
			{
				path: "*",
				element: <Community />,
			},
		],
	},
	{
		path: PathConstants.PREFERENCES,
		element: <Preferences />,
	},
];

export default routes;
