/** @format */

import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Landing from "../../pages/Landing/Landing";
import styles from "./private-layout.module.scss";

const PrivateLayout = () => {
	let { pathname } = useLocation();

	return (
		<>
			{pathname !== "/" ? (
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
