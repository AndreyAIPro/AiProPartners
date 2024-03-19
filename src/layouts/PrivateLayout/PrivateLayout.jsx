import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useUser } from "../../hooks/useUser";
const PrivateLayout = () => {
	const { user } = useUser();
	return (
		<>
			{user && (
				<div className="height-full flex justify-between bg-primary text-white">
					<Sidebar isLeftSidebar />
					<Outlet />
					<Sidebar />
				</div>
			)}
		</>
	);
};

export default PrivateLayout;
