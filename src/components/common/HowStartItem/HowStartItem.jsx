

import { howStart } from '../../../data/landingData';

const HowStartItem = ({ title, icon, index, dataAos }) => {
	return (
		<li
			data-aos={dataAos}	
			id={title}
			className={`relative text-white flex flex-col items-center gap-8 w-screen max-w-[265px]
			how-start-after how-start-before
			${index == 1 ? 'before:hidden' : index == howStart.length ? 'after:hidden' : null} max-[590px]:after:hidden max-[590px]:before:hidden max-[590px]:flex-row max-[590px]:items-start max-[590px]:max-w-full max-[590px]:justify-center max-md:after:hidden max-md:before:hidden max-sm:items-center max-sm:justify-center`}
		>
			<img
				src={icon}
				alt={title}
				className='max-h-14 max-w-14 max-sm:max-h-[95px] max-sm:max-w-[95px]'
			/>
			<div className='flex flex-col items-center max-sm:items-center max-sm:justify-center max-sm:gap-[10px] max-md:gap-5'>
				<div className='bg-separator-bg flex items-center justify-center rounded-full h-8 w-[32px] font-black text-title3 z-20'>
					{index}
				</div>
				<h3 className='max-w-[150px] text-center font-black text-[16px] max-sm:max-w-[185px]'>
					{title}
				</h3>
			</div>
		</li>
	);
};

export default HowStartItem;
