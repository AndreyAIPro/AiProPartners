

const LandingSectionHeading = ({ title, subtitle, isUpper, dataAos }) => {
	return (
		<div
			className='flex flex-col justify-center items-center gap-6 max-sm:text-center'
			data-aos={dataAos}
		>
			<h2
				className={`font-extrabold font-nunito-sans text-center text-white text-[34px] ${isUpper ? 'uppercase' : null}`}
			>
				{title}
			</h2>
			{subtitle ? (
				<h4 className='text-title3 font-nunito-sans text-white'>{subtitle}</h4>
			) : null}
		</div>
	);
};

export default LandingSectionHeading;
