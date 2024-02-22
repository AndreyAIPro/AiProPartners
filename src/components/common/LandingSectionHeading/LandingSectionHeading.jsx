/** @format */

const LandingSectionHeading = ({ title, subtitle }) => {
	return (
		<div className='flex flex-col justify-center items-center gap-6'>
			<h2 className='font-extrabold font-nunito-sans text-center text-white text-[34px]'>
				{title}
			</h2>
			{subtitle ? (
				<h4 className='text-title3 font-nunito-sans text-white'>{subtitle}</h4>
			) : null}
		</div>
	);
};

export default LandingSectionHeading;
