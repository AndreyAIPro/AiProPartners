import { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/images/sidebar-arrow.svg";
import SocialLinksList from "../../SocialLinksList";
import BalanceArticle from "../../common/BalanceArticle";
import SidebarProfileBtn from "../../common/SidebarProfileBtn";

const RightSidebar = () => {
	const [isExpandedRightSidebar, setIsExpandedRightSidebar] = useState(false);

	const handleClick = () =>
		isExpandedRightSidebar
			? setIsExpandedRightSidebar(false)
			: setIsExpandedRightSidebar(true);

	return (
		<aside
			className={`gap=[0px] sticky top-0  flex h-[100vh] w-[18vw] max-w-[319px] flex-col items-center justify-between p-5 max-xl:gap-5 max-xl:px-[10px] max-xl:py-5 2xl:gap-[50px] ${isExpandedRightSidebar ? "max-xl:max-w-[90px]" : "max-xl:max-w-[319px]"} overflow-hidden whitespace-nowrap transition-all`}
		>
			<div className="w-full">
				<BalanceArticle isExpandedRightSidebar={isExpandedRightSidebar} />
				<button
					className={`w-full mt-5 hidden rotate-180 pl-5 ${isExpandedRightSidebar ? "max-xl:justify-center" : "max-xl:justify-star rotate-0 pl-5"} items-center transition-all max-xl:flex`}
					onClick={() => handleClick()}
				>
					<Arrow />
				</button>
				<SidebarProfileBtn isExpandedRightSidebar={isExpandedRightSidebar} />
			</div>
			<div className="xl:hidden">
				<SocialLinksList isExpandedRightSidebar={isExpandedRightSidebar} />
			</div>
		</aside>
	);
};

export default RightSidebar;
