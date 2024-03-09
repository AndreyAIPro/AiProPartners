/** @format */

import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Landing from "../../pages/Landing/Landing";
import styles from "./private-layout.module.scss";
import { useUser } from "../../hooks/useUser";
const PrivateLayout = () => {
	let { pathname } = useLocation();
	const { user } = useUser();
	return (
		<>
			{pathname !== "/" && user ? (
				<div className={styles.private__layout}>
					<Sidebar isLeftSidebar />
					<Outlet />
					<Sidebar />
				</div>
			) : (
				<Landing />
			)}
		</>
	);
};

export default PrivateLayout;
