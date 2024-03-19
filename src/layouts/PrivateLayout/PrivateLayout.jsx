import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useUser } from "../../hooks/useUser";
import Rules from "./Rules/Rules";
import { useState } from "react";

const PrivateLayout = () => {
	const { user } = useUser();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	return (
		<>
			{user && (
				<div className="height-full flex justify-between bg-primary text-white">
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
