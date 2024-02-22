/** @format */

import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';
import WhyAIPROList from '../components/WhyAIPROList/WhyAIPROList';

const WhyAIPRO = () => {
	return (
		<section className='flex flex-col gap-[34px] items-center max-h-[530px] h-screen pt-[100px]'>
			<LandingSectionHeading title='Почему выбирают AIPRO ?' />
			<WhyAIPROList />
		</section>
	);
};

export default WhyAIPRO;
