import { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/images/sidebar-arrow.svg";
import SidebarNavMenu from "../../SidebarNavMenu";
import SocialLinksList from "../../SocialLinksList";
import TelegramLink from "../../common/TelegramLink";
import LeftSidebarHeader from "./LeftSidebarHeader";

const LeftSidebar = () => {
	const [isExpandedLeftSidebar, setIsExpandedLeftSidebar] = useState(true);

	const handleClick = () =>
		isExpandedLeftSidebar
			? setIsExpandedLeftSidebar(false)
			: setIsExpandedLeftSidebar(true);

import { RulesIcon } from "../../../assets/images/navIcons";
const LeftSidebar = ({ openModal }) => {
	return (
		<aside
			className={`w-full sticky top-0 max-w-[319px] ${isExpandedLeftSidebar ? "max-xl:max-w-[90px]" : "max-xl:max-w-[319px]"} transition-all`}
		>
			<LeftSidebarHeader isExpandedSidebar={isExpandedLeftSidebar} />
			<button
				className={`w-full mt-5 hidden ${isExpandedLeftSidebar ? "max-xl:justify-center" : "rotate-180 pl-5 max-xl:justify-start"} items-center max-xl:flex`}
				onClick={() => handleClick()}
			>
				<Arrow />
			</button>
			<SidebarNavMenu isExpandedSidebar={isExpandedLeftSidebar} />
		<aside className="w-full sticky top-0 max-w-[sidebar-width]">
			<LeftSidebarHeader />
			<SidebarNavMenu />

			<button onClick={openModal} className="h-[90px] p-[20px]">
				<div className="flex items-center gap-[1.25rem]">
					<RulesIcon />
					<p className="text-text1 max-xl:hidden">Правила</p>
				</div>
			</button>

			<TelegramLink />

			<span className="max-xl:hidden">
				<SocialLinksList />
			</span>
		</aside>
	);
};

export default LeftSidebar;
