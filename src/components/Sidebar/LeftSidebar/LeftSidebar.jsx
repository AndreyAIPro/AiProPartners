import TelegramLink from "../../common/TelegramLink";
import SidebarNavMenu from "../../SidebarNavMenu";
import SocialLinksList from "../../SocialLinksList";
import LeftSidebarHeader from "./LeftSidebarHeader";
import { RulesIcon } from "../../../assets/images/navIcons";
const LeftSidebar = ({ openModal }) => {
	return (
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
