/** @format */

import { ReactComponent as Logo } from '../../../../assets/images/logo.svg';
import styles from './left-sidebar-header.module.scss';

const LeftSidebarHeader = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Logo />
				<h1 className={styles.logo__text}>
					AIPRO <span className='font-bold'>PARTNERS</span>
				</h1>
			</div>
		</header>
	);
};

export default LeftSidebarHeader;
