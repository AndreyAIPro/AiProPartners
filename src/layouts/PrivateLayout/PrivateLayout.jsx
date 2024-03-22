import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useUser } from "../../hooks/useUser";

const PrivateLayout = () => {
	const { user } = useUser();

	return (
		<>
			{user && (
				<div className="flex h-full justify-between bg-primary text-white max-xl:w-[1280px]">
					<Sidebar isLeftSidebar />
					<Outlet />
					<Sidebar />
				</div>
			)}
		</>
	);
};

export default PrivateLayout;
