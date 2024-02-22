/** @format */

const LandingPartnersListItem = ({ title, subtext, image }) => {
	return (
		<li className='flex flex-col text-white max-w-[310px]'>
			<img src={image} alt={title} className='max-w-[230px]' />
			<h4 className='font-nunito-sans mt-4 font-black text-[18px]'>{title}</h4>
			<p className='font-nunito-sans text-text2'>{subtext}</p>
		</li>
	);
};

export default LandingPartnersListItem;
