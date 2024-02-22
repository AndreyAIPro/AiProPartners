/** @format */

const TopPartnersItem = ({ icon, profit, registrations, sales }) => {
	const groupBlock = [
		{ label: 'Прибыль', value: profit },
		{ label: 'Регистрации', value: registrations },
		{ label: 'Продажи', value: sales },
	];

	return (
		<li className='flex gap-8 py-5 px-8 bg-white max-w-[862px] w-full rounded-lg '>
			<img src={icon} alt={profit} />
			<ul className='flex justify-around w-full items-center'>
				{groupBlock.map((block) => (
					<div key={block.label} className='flex flex-col '>
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
			</ul>
		</li>
	);
};

export default TopPartnersItem;
