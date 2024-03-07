/** @format */

const SmallStatisticsItem = ({ value, statistic }) => {
	return (
		<li
			className='flex flex-col items-center gap-5 font-nunito-sans text-[18px] leading-6'
			data-aos='fade-up'
		>
			<span className='font-black text-[36px] font-nunito-sans leading-[44px]'>
				{value}
			</span>
			<div className='bg-separator-bg h-2 w-[8px]'/>
			{statistic}
		</li>
	);
};

export default SmallStatisticsItem;
