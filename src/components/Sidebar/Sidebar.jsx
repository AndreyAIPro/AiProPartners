import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

const Sidebar = (props) => {
	return (
		<div className="sticky flex flex-col bg-secondary">
			{props.isLeftSidebar ? <LeftSidebar /> : <RightSidebar />}
		</div>
	);
};

export default Sidebar;
