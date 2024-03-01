/** @format */
import Community from '../components/common/Community/Community';
import UsuallyArticles from '../components/common/UsuallyArticles/UsuallyArticles';
import Dashboard from '../pages/Dashboard/Dashboard';
import Finances from '../pages/Finances/Finances';
import Landing from '../pages/Landing/Landing';
import Ref from '../pages/Ref/Ref';
import Study from '../pages/Study/Study';
import Subaccount from '../pages/Subaccount/Subaccount';
import PathConstants from './pathConstants';

const routes = [
	{
		path: PathConstants.HOME,
		element: <Landing />,
	},

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
				path: '/study/articles',
				element: <UsuallyArticles />,
			},
			{
				path: '/study/community',
				element: <Community />,
			},
		],
	},
];

export default routes;
