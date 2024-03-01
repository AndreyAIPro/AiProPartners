/** @format */

import { howStart } from '../../../data/landingData';

const HowStartItem = ({ title, icon, index, dataAos }) => {
	return (
		<li
			data-aos={dataAos}
			id={title}
			className={`relative text-white flex flex-col items-center gap-8 w-screen max-w-[265px]
			after:w-[132px] after:h-4 after:top-[95px] after:bg-arrow-how-start after:absolute after:bg-center after:origin-left after:transform after:translate-x-[65px] after:z-10 before:w-[165px] before:h-4 before:top-[95px] before:bg-separator-how-start before:absolute before:bg-center before:origin-right before:transform before:translate-x-[-70px] before:bg-no-repeat before:z-10
			${index == 1 ? 'before:hidden' : index == howStart.length ? 'after:hidden' : null} max-sm:after:hidden max-sm:before:hidden max-sm:flex-row max-sm:items-start max-sm:max-w-full max-sm:justify-center max-md:after:hidden max-md:before:hidden`}
		>
			<img
				src={icon}
				alt={title}
				className='max-h-14 max-w-14 max-sm:max-h-[95px] max-sm:max-w-[95px]'
			/>
			<div className='flex flex-col items-center max-sm:items-start max-sm:gap-[10px]'>
				<div className='bg-separator-bg flex items-center justify-center rounded-full h-8 w-8 font-black text-title3 z-20'>
					{index}
				</div>
				<h3 className='max-w-[150px] text-center font-black text-[16px] max-sm:text-left max-sm:max-w-[185px]'>
					{title}
				</h3>
			</div>
		</li>
	);
};

export default HowStartItem;
