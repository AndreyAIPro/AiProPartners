/** @format */

import BalanceArticle from '../../common/BalanceArticle';
import SidebarProfileBtn from '../../common/SidebarProfileBtn';
import styles from './right-sidebar.module.scss';

const RightSidebar = () => {
	return (
		<div className={styles.sidebar__wrapper}>
			<BalanceArticle />
			<SidebarProfileBtn />
		</div>
	);
};

export default RightSidebar;
