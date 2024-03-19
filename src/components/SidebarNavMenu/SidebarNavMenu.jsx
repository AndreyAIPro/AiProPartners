import {
	DashboardIcon,
	FinancesIcon,
	RefHrefIcon,
	StudyIcon,
	SubAccountIcon,
} from "../../assets/images/navIcons";
import PathConstants from "../../router/pathConstants";
import SidebarNavItem from "../common/SidebarNavItem";

const navItemsData = [
	{ icon: <DashboardIcon />, name: "Dashboard", href: PathConstants.DASHBOARD },
	{
		icon: <SubAccountIcon />,
		name: "Субаккаунт",
		href: PathConstants.SUBACCOUNT,
	},
	{ icon: <RefHrefIcon />, name: "Реф.ссылка", href: PathConstants.REF },
	{ icon: <StudyIcon />, name: "Обучение", href: PathConstants.STUDY },
	{ icon: <FinancesIcon />, name: "Финансы", href: PathConstants.FINANCES },
];

const SidebarNavMenu = ({ isExpandedSidebar }) => {
	return (
		<nav className="w-full mt-[30px] flex flex-col items-center justify-center max-lg:mt-5">
			{navItemsData.map((item, i) => {
				return (
					<SidebarNavItem
						isExpandedSidebar={isExpandedSidebar}
						key={i}
						{...item}
					/>
				);
			})}
		</nav>
	);
};

export default SidebarNavMenu;
