import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useUser } from "../../hooks/useUser";
import Rules from "../../utils/Rules/Rules";

const PrivateLayout = () => {
	const { user } = useUser();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			{user && (
				<div className=" w-full flex  h-full bg-primary text-white">
					<Rules openModal={isModalOpen} closeModal={closeModal} />
					<Sidebar isLeftSidebar openModal={() => setIsModalOpen(true)} />
					<Outlet />
					<Sidebar />
				</div>
			)}
		</>
	);
};

export default PrivateLayout;
