/** @format */

import LandingSectionHeading from '../components/common/LandingSectionHeading/LandingSectionHeading';
import HowStartList from '../components/HowStartList/HowStartList';

const HowStart = () => {
	return (
		<section className='pt-[120px] pb-[70px] flex flex-col items-center gap-[78px] max-sm:gap-5'>
			<LandingSectionHeading title='Как начать' dataAos='fate-right' />
			<HowStartList />
		</section>
	);
};

export default HowStart;
