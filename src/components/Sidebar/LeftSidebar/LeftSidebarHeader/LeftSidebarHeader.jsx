import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";

const LeftSidebarHeader = () => {
	return (
		<header className="flex flex-col gap-[52px]">
			<NavLink to="/" className="m-0 flex h-[106px] items-center gap-x-5 p-5">
				<span>
					<Logo />
				</span>
				<h1 className="leading-0 m-0 flex flex-col text-title2">
					AIPRO <span className="font-regular text-[#b4b4b4]">PARTNERS</span>
				</h1>
			</NavLink>
		</header>
	);
};

export default LeftSidebarHeader;
