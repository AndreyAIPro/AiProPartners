import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

const Sidebar = ({ isLeftSidebar, openModal }) => {
	return (
		<div className="sticky flex flex-col bg-secondary max-xl:relative">
			{isLeftSidebar ? <LeftSidebar openModal={openModal} /> : <RightSidebar />}
		</div>
	);
};

export default Sidebar;
