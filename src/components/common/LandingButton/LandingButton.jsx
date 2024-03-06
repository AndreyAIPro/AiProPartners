/** @format */

import { NavLink } from 'react-router-dom';

const LandingButton = ({ label, href, isBorder, isYellow, dataAos }) => {
	return (
		<NavLink
			to={href}
			className={() =>
				[
					isBorder
						? 'border border-white rounded-[8px] py-[14px] px-[34px] font-nunito-sans font-bold text-sm max-md:py-3 max-md:px-[20px]'
						: 'font-nunito-sans font-extrabold text-sm max-md:py-3 max-md:px-[20px]',
					isYellow
						? 'bg-yellow border-2 border-[#000000] text-black font-nunito-sans font-regular w-fit text-center px-[42px] py-4 font-title3 rounded-[8px]'
						: null,
				].join(' ')
			}
			data-aos={dataAos}
		>
			{label}
		</NavLink>
	);
};

export default LandingButton;
