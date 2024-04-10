import { NavLink } from "react-router-dom";

const SidebarNavItem = ({ href, name, icon }) => {
	return (
		<NavLink
			to={href}
			className="max-w-sidebar-width w-full  color-white flex h-[4rem] items-center justify-start gap-5 p-5 text-text3 no-underline 2xl:h-[70px] 2xl:text-text1"
			style={({ isActive }) => {
				return {
					backgroundColor: isActive ? "#24a1e0" : null,
				};
			}}
		>
			<span>{icon}</span>

			<span className="flex text-right">{name}</span>
		</NavLink>
	);
};

export default SidebarNavItem;
