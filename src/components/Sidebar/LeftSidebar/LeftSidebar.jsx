import { useState } from "react";
import { RulesIcon } from "../../../assets/images/navIcons";
import { ReactComponent as Arrow } from "../../../assets/images/sidebar-arrow.svg";
import SidebarNavMenu from "../../SidebarNavMenu";
import LeftSidebarHeader from "./LeftSidebarHeader";

const LeftSidebar = ({ openModal }) => {
	const [isExpandedLeftSidebar, setIsExpandedLeftSidebar] = useState(true);

	const handleClick = () =>
		isExpandedLeftSidebar
			? setIsExpandedLeftSidebar(false)
			: setIsExpandedLeftSidebar(true);

	return (
		<aside
			className={`w-full sticky top-0 max-w-[319px] ${isExpandedLeftSidebar ? "max-xl:max-w-[90px]" : "max-xl:max-w-[319px]"} overflow-hidden whitespace-nowrap transition-all`}
		>
			<LeftSidebarHeader />
			<button
				className={`w-full mt-5 hidden ${isExpandedLeftSidebar ? "max-xl:justify-center" : "rotate-180 pl-5 max-xl:justify-start"} items-center max-xl:flex`}
				onClick={() => handleClick()}
			>
				<Arrow />
			</button>
			<SidebarNavMenu />

			<button onClick={openModal} className="h-[90px] p-[20px]">
				<div
					className="flex items-center gap-[1.25rem]"
					style={{ fontSize: "20px" }}
				>
					<RulesIcon />
					<p
						className={`${isExpandedLeftSidebar ? "max-xl:hidden" : null} "text-text1"`}
					>
						Правила
					</p>
				</div>
			</button>

			{/* <TelegramLink />

			<span className="max-xl:hidden">
				<SocialLinksList />
			</span>
			<Rules /> */}
		</aside>
	);
};

export default LeftSidebar;
