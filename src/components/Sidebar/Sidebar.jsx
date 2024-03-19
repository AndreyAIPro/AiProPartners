import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

const Sidebar = ({ isLeftSidebar }) => {
	return (
		<div className="sticky flex flex-col bg-secondary max-xl:relative">
			{isLeftSidebar ? <LeftSidebar /> : <RightSidebar />}
		</div>
	);
};

export default Sidebar;
