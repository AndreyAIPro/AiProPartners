/** @format */

import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import { sidebar__wrapper as wrapper } from './sidebar.module.scss';

const Sidebar = (props) => {
	return (
		<div className={wrapper}>
			{props.isLeftSidebar ? <LeftSidebar /> : <RightSidebar />}
		</div>
	);
};

export default Sidebar;
