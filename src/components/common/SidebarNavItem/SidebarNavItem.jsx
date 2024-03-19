import { NavLink } from "react-router-dom";

const SidebarNavItem = ({ href, name, icon, isExpandedSidebar }) => {
	return (
		<NavLink
			to={href}
			className="max-w-sidebar-width w-full height-[70px] color-white flex items-center gap-5 p-5 text-left text-text1 no-underline"
			style={({ isActive }) => {
				return {
					backgroundColor: isActive ? "#24a1e0" : null,
				};
			}}
		>
			{icon}
			<span
				className={`${isExpandedSidebar ? "hidden opacity-0" : "flex text-right opacity-100 transition-opacity delay-100 ease-out"}`}
			>
				{name}
			</span>
		</NavLink>
	);
};

export default SidebarNavItem;
