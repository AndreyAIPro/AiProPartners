

const GrowthListItem = ({
	title,
	image,
	challenge,
	taskText,
	solutionText,
	isLeftItem,
	dataAos,
}) => {
	return (
		<li
			className={`flex  ${isLeftItem ? 'flex-row-reverse' : null} font-nunito-sans w-full relative after:h-[431px] after:w-[431px] after:top-5 after:left-18 after gap-[122px] max-sm:flex-col max-sm:gap-0 max-sm:items-center max-sm:after:hidden max-lg:gap-[25px]`}
			data-aos={dataAos}
		>
			<img src={image} alt='title' className='z-20 max-sm:max-w-[200px]' />
			<div className='flex flex-col items-start w-full'>
				<div className='flex flex-col items-start justify-center w-full text-white z-20 '>
					<h4 className='text-text3 bg-challenge-bg w-fit py-1 px-2 rounded-[4px]'>
						{challenge}
					</h4>
					<h3 className='my-2 text-title3 font-black'>{title}</h3>
					<h4 className='font-black text-[18px]'>Задача</h4>
					<p className='max-w-[1080px] mt-2 text-text2'>{taskText}</p>
				</div>
				<div className='flex flex-col gap-2 w-full h-fit bg-[linear-gradient(180deg,_#e5007c_0%,_rgba(243,_79,_168,_0)_100%)] p-5 rounded-[8px] text-white mt-11 max-sm:max-h-fit'>
					<h4 className='font-black text-[18px]'>Решение</h4>
					<p className='text-text2'>{solutionText}</p>
				</div>
			</div>
		</li>
	);
};

export default GrowthListItem;
