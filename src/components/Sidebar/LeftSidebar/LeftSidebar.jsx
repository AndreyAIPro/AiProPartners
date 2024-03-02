/** @format */

import TelegramLink from "../../common/TelegramLink";
import SidebarNavMenu from "../../SidebarNavMenu";
import SocialLinksList from "../../SocialLinksList";
import LeftSidebarHeader from "./LeftSidebarHeader";

const LeftSidebar = () => {
	return (
		<aside className="w-[319px]">
			<LeftSidebarHeader />
			<SidebarNavMenu />
			<TelegramLink />
			<SocialLinksList />
		</aside>
	);
};

export default LeftSidebar;
