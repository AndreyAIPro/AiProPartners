import { useState } from "react";
import { RulesIcon } from "../../../assets/images/navIcons";
import { ReactComponent as Arrow } from "../../../assets/images/sidebar-arrow.svg";
import SidebarNavMenu from "../../SidebarNavMenu";
import LeftSidebarHeader from "./LeftSidebarHeader";
import SocialLinksList from "../../SocialLinksList";

const LeftSidebar = ({ openModal }) => {
	const [isExpandedLeftSidebar, setIsExpandedLeftSidebar] = useState(true);

	const handleClick = () =>
		isExpandedLeftSidebar
			? setIsExpandedLeftSidebar(false)
			: setIsExpandedLeftSidebar(true);

	return (
		<aside
			className={`sticky top-0 w-[18vw] max-w-[319px] ${isExpandedLeftSidebar ? "max-xl:max-w-[90px]" : "max-xl:max-w-[319px]"} overflow-hidden whitespace-nowrap transition-all`}
		>
			<LeftSidebarHeader />
			<button
				className={`w-full hidden h-3  ${isExpandedLeftSidebar ? "max-xl:justify-center" : "rotate-180 pl-5 max-xl:justify-start"} items-center max-xl:flex`}
				onClick={() => handleClick()}
			>
				<Arrow />
			</button>
			<SidebarNavMenu />

			<button
				onClick={openModal}
				className="h-[4rem]  px-[1.2rem] 2xl:h-[90px]"
			>
				<div className="flex items-center gap-[1.25rem] text-text3 2xl:text-text1">
					<RulesIcon style={{ fontSize: "20px" }} />
					<p className={`${isExpandedLeftSidebar ? "max-xl:hidden" : ""} `}>
						Правила
					</p>
				</div>
			</button>
			<div className="max-xl:hidden">
				<SocialLinksList />
			</div>
		</aside>
	);
};

export default LeftSidebar;
