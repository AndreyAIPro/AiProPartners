/** @format */

import { ReactComponent as DashboardIcon } from '../../assets/images/navIcons/DashboardIcon.svg';
import { ReactComponent as FinancesIcon } from '../../assets/images/navIcons/financesIcon.svg';
import { ReactComponent as RefHrefIcon } from '../../assets/images/navIcons/refIcon.svg';
import { ReactComponent as StudyIcon } from '../../assets/images/navIcons/studyIcon.svg';
import { ReactComponent as SubAccountIcon } from '../../assets/images/navIcons/subAccountIcon.svg';
import PathConstants from '../../router/pathConstants';
import SidebarNavItem from '../common/SidebarNavItem';

import styles from './sidebar-nav-menu.module.scss';

const navItemsData = [
	{ icon: <DashboardIcon />, name: 'Home', href: PathConstants.HOME },
	{ icon: <DashboardIcon />, name: 'Dashboard', href: PathConstants.DASHBOARD },
	{
		icon: <SubAccountIcon />,
		name: 'Субаккаунт',
		href: PathConstants.SUBACCOUNT,
	},
	{ icon: <RefHrefIcon />, name: 'Реф.ссылка', href: PathConstants.REF },
	{ icon: <StudyIcon />, name: 'Обучение', href: PathConstants.STUDY },
	{ icon: <FinancesIcon />, name: 'Финансы', href: PathConstants.FINANCES },
];

const SidebarNavMenu = () => {
	return (
		<nav className={styles.nav__wrapper}>
			{navItemsData.map((item, i) => {
				return (
					<SidebarNavItem
						key={i}
						href={item.href}
						icon={item.icon}
						name={item.name}
					/>
				);
			})}
		</nav>
	);
};

export default SidebarNavMenu;
