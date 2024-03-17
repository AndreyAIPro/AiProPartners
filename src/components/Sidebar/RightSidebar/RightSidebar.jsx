import BalanceArticle from "../../common/BalanceArticle";
import SidebarProfileBtn from "../../common/SidebarProfileBtn";

const RightSidebar = () => {
	return (
		<div className="sticky top-0">
			<div className="width-sidebar-width flex min-h-dvh flex-col gap-[50px] p-5">
				<BalanceArticle />
				<SidebarProfileBtn />
			</div>
		</div>
	);
};

export default RightSidebar;
