import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";

const LeftSidebarHeader = ({ isExpandedSidebar }) => {
	return (
		<header className="flex flex-col gap-[52px]">
			<NavLink to="/" className="m-0 flex h-[106px] items-center gap-x-5 p-5">
				<Logo />
				<h1
					className={`${isExpandedSidebar ? "max-xl:hidden" : "max-xl:flex"} 'leading-0 m-0 flex flex-col text-title2`}
				>
					AIPRO <span className="font-regular text-[#b4b4b4]">PARTNERS</span>
				</h1>
			</NavLink>
		</header>
	);
};

export default LeftSidebarHeader;
