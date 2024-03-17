import TelegramLink from "../../common/TelegramLink";
import SidebarNavMenu from "../../SidebarNavMenu";
import SocialLinksList from "../../SocialLinksList";
import LeftSidebarHeader from "./LeftSidebarHeader";

const LeftSidebar = () => {
	return (
		<aside className="w-full sticky top-0 max-w-[sidebar-width]">
			<LeftSidebarHeader />
			<SidebarNavMenu />
			<TelegramLink />
			<span className="max-xl:hidden">
				<SocialLinksList />
			</span>
		</aside>
	);
};

export default LeftSidebar;
