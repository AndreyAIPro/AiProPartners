import { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/images/sidebar-arrow.svg";
import SocialLinksList from "../../SocialLinksList";
import BalanceArticle from "../../common/BalanceArticle";
import SidebarProfileBtn from "../../common/SidebarProfileBtn";

const RightSidebar = () => {
	const [isExpandedRightSidebar, setIsExpandedRightSidebar] = useState(true);

	const handleClick = () =>
		isExpandedRightSidebar
			? setIsExpandedRightSidebar(false)
			: setIsExpandedRightSidebar(true);

	return (
		<aside
			className={`w-full sticky top-0 flex min-h-dvh max-w-[319px] flex-col gap-[50px] p-5 max-xl:gap-5 max-xl:px-[10px] max-xl:py-5 ${isExpandedRightSidebar ? "max-xl:max-w-[90px]" : "max-xl:max-w-[319px]"} transition-all`}
		>
			<BalanceArticle />
			<button
				className={`w-full mt-5 hidden rotate-180 pl-5 ${isExpandedRightSidebar ? "max-xl:justify-center" : "max-xl:justify-start"} items-center max-xl:flex`}
				onClick={() => handleClick()}
			>
				<Arrow />
			</button>
			<SidebarProfileBtn />
			<SocialLinksList />
		</aside>
	);
};

export default RightSidebar;
