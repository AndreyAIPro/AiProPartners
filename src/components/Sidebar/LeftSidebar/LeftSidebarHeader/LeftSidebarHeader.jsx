/** @format */

import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";

const LeftSidebarHeader = () => {
	return (
		<header className="flex flex-col gap-[52px] p-5">
			<div className="flex items-center gap-x-5">
				<Logo />
				<h1 className="leading-0 m-0 flex flex-col text-title2">
					AIPRO <span className="font-regular text-[#b4b4b4]">PARTNERS</span>
				</h1>
			</div>
		</header>
	);
};

export default LeftSidebarHeader;
