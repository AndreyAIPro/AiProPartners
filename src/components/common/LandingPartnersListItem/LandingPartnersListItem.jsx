

const LandingPartnersListItem = ({ title, subtext, image, dataAos }) => {
	return (
		<li
			className='flex flex-col text-white gap-5 max-w-[310px] max-sm:items-center max-sm:flex-col'
			data-aos={dataAos}
		>
			<img
				src={image}
				alt={title}
				className='max-w-[230px] max-sm:max-w-[293px] w-full'
			/>
			<div className='flex flex-col'>
				<h4 className='font-nunito-sans mt-4 font-black text-[18px]'>
					{title}
				</h4>
				<p className='font-nunito-sans text-text2 max-sm:text-center w-full'>
					{subtext}
				</p>
			</div>
		</li>
	);
};

export default LandingPartnersListItem;
