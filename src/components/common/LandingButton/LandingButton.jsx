/** @format */

import { NavLink } from "react-router-dom";

const LandingButton = ({ label, href, isBorder, isYellow, dataAos,isMobileStart }) => {
	return (
		<NavLink
			to={href}
			className=
				{`${isBorder
						? "text-sm rounded-[8px] border border-white px-[34px] py-[14px] font-bold max-md:px-[20px] max-md:py-3"
						: null}
				${isYellow
						? "font-regular font-title3 max-w-[300px] rounded-[8px] border-2 border-[#000000] bg-yellow px-[42px] py-4 text-center text-black max-sm:border-none"
						: null }
						${isMobileStart ? 'text-text2 bg-yellow px-3 border-none font-[400]': null}
						font-nunito-sans z-30`}
			
			data-aos={dataAos}
		>
			{label}
		</NavLink>
	);
};

export default LandingButton;
