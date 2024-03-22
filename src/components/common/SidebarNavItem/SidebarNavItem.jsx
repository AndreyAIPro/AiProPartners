import { NavLink } from "react-router-dom";

const SidebarNavItem = ({ href, name, icon }) => {
	return (
		<NavLink
			to={href}
			className="max-w-sidebar-width w-full height-[70px] color-white flex items-center justify-start gap-5 p-5 text-text1 no-underline"
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
