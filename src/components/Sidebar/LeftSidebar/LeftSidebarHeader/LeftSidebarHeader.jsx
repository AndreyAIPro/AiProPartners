import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";

const LeftSidebarHeader = () => {
	return (
		<header className="flex flex-col gap-[52px]">
			<NavLink
				to="/"
				className="m-0 flex h-[85px] items-center gap-x-5 px-5 2xl:h-[106px]"
			>
				<span>
					<Logo />
				</span>
				<h1 className="leading-0 m-0 flex flex-col text-text2 2xl:text-title2 ">
					AIPRO <span className="font-regular text-[#b4b4b4]">PARTNERS</span>
				</h1>
			</NavLink>
		</header>
	);
};

export default LeftSidebarHeader;
