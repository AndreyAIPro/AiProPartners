/** @format */

import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import styles from './private-layout.module.scss';

const PrivateLayout = () => {
	return (
		<div className={styles.private__layout}>
			<Sidebar isLeftSidebar />
			<Outlet />
			<Sidebar />
		</div>
	);
};

export default PrivateLayout;
