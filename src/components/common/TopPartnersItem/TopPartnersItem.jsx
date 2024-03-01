/** @format */

const TopPartnersItem = ({ icon, profit, registrations, sales, dataAos }) => {
	const groupBlock = [
		{ label: 'Прибыль', value: profit },
		{ label: 'Регистрации', value: registrations },
		{ label: 'Продажи', value: sales },
	];

	return (
		<li
			className='flex gap-8 py-5 px-8 bg-white max-w-[862px] w-full rounded-lg max-sm:max-w-[450px]'
			data-aos={dataAos}
		>
			<div className='flex justify-around w-full items-center max-sm:grid max-sm:grid-cols-2 max-sm:grid- max-sm:grid-rows-2 max-sm:place-items-center max-sm:gap-y-3'>
				<img src={icon} alt={profit} />
				{groupBlock.map((block) => (
					<div key={block.label} className='flex flex-col'>
						<h3 className='text-[#616368] font-nunito-sans'>{block.label}</h3>
						{block.value == profit ? (
							<h3 className='font-black text-title3 text-[#487BFE] font-nunito-sans'>
								{block.value}
							</h3>
						) : (
							<h3 className='font-black text-title3  font-nunito-sans'>
								{block.value}
							</h3>
						)}
					</div>
				))}
			</div>
		</li>
	);
};

export default TopPartnersItem;
