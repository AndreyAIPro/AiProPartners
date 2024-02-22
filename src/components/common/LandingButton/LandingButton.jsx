/** @format */

import { NavLink } from 'react-router-dom';

const LandingButton = ({ label, href, isBorder, isYellow }) => {
	return (
		<NavLink
			to={href}
			className={() =>
				[
					isBorder
						? 'border border-white rounded-[8px] py-[14px] px-[34px] font-nunito-sans font-bold text-sm'
						: 'font-nunito-sans font-extrabold text-sm',
					isYellow
						? 'bg-yellow border-2 border-[#000000] text-black font-nunito-sans font-regular w-fit text-center px-[42px] py-4 font-title3 rounded-[8px]'
						: null,
				].join(' ')
			}
		>
			{label}
		</NavLink>
	);
};

export default LandingButton;
