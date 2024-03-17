import SocialLinksList from "../../SocialLinksList";
import BalanceArticle from "../../common/BalanceArticle";
import SidebarProfileBtn from "../../common/SidebarProfileBtn";

const RightSidebar = () => {
	return (
		<div className="width-sidebar-width sticky top-0 flex min-h-dvh flex-col gap-[50px] p-5 max-xl:max-w-[90px] max-xl:px-[10px] max-xl:py-5">
			<BalanceArticle />
			<SidebarProfileBtn />
			<SocialLinksList />
		</div>
	);
};

export default RightSidebar;
