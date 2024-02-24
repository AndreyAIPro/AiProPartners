/** @format */
import { NavLink } from 'react-router-dom';
import styles from './sidebar-nav-item.module.scss';

const SidebarNavItem = ({ href, name, icon }) => {
	return (
		<NavLink
			to={href}
			className={styles.nav__item}
			style={({ isActive }) => {
				return {
					backgroundColor: isActive ? '#24a1e0' : '',
				};
			}}
		>
			{icon}
			{name}
		</NavLink>
	);
};

export default SidebarNavItem;
