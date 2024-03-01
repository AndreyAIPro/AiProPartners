/** @format */

import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';
import WhyAIPROList from '../components/WhyAIPROList/WhyAIPROList';

const WhyAIPRO = () => {
	return (
		<section className='flex flex-col gap-[34px] items-center max-h-[530px] h-screen pt-[100px] max-md:h-fit max-md:max-h-fit max-lg:max-h-fit max-lg:h-fit'>
			<LandingSectionHeading title='Почему выбирают AIPRO ?' dataAos='fate' />
			<WhyAIPROList />
		</section>
	);
};

export default WhyAIPRO;
