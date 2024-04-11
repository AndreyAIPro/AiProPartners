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
			className={`sticky top-0 w-[18vw] max-w-[319px] ${isExpandedLeftSidebar ? "max-2xl:max-w-[90px]" : "max-2xl:max-w-[319px]"} overflow-hidden whitespace-nowrap transition-all`}
		>
			<LeftSidebarHeader />
			<button
				className={`w-full mt-2 flex h-3 ${isExpandedLeftSidebar ? "max-2xl:justify-center" : "rotate-180 pl-5 max-2xl:justify-start"} items-center 2xl:hidden`}
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
					<p className={`${isExpandedLeftSidebar ? "max-2xl:hidden" : ""} `}>
						Правила
					</p>
				</div>
			</button>
			<div className="max-2xl:hidden">
				<SocialLinksList />
			</div>
		</aside>
	);
};

export default LeftSidebar;
